import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { options } from "./api/auth/[...nextauth]/options.js";
import {cookies} from 'next/headers'
const prisma = new PrismaClient();
import {
  createCustomerIfNull,
  getSubscription,
} from "./[lng]/helpers/billing.js";
import { customFetch } from "./customFetch.js";
import { subtitleXserverApi } from "../constants.js";

export const fetchTextFromURLServerSide = async (subtitleId) => {
  const url = subtitleXserverApi + "/subtitle?id=" + subtitleId;
  const user = await UpdateAndGetUser_SS();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "text",
      },
      body: JSON.stringify({
        hashcode: "xxx",
        request_id: "xxx",
        device_ip: "0.0.0.0",
        uuid: user.uuid,
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error(" fetch subtitle failed, contact administrator." + error);
    return "";
  }
};

export const searchSubtitleByUUID = async (uuid) => {
  try {
    const f = "2ee9a177-f9e7-4b76-94a1-943c02ef32b5";
    const pl = [uuid];
    const result = await remoteCall(f, pl);
    return result
  } catch (e) {
    console.error(e);
  }
};

export const remoteCall = async (f, pl) => {
  const user = await UpdateAndGetUser_SS();
  let response;
  try {
    console.log("subtitlex: about to cal the remotecall with user ");
    console.log(user);
    if (!user.uuid) {
      return;
    }
    response = await fetch(subtitleXserverApi + "/api1", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify({
        hashcode: "xxx",
        request_id: "xxx",
        device_ip: "0.0.0.0",
        user: user,
        function: f,
        params: pl,
      }),
    });
  } catch (e) {
    console.error("subtitlex: remoteCall failed", e);
    return null;
  }
  return await response.json();
};



export const UpdateAndGetUser_SS = async () => {
  try {
    let user = {};
    const session = await getServerSession(options);
    if (session && session.user) {
      user = session.user;
    }
    if (!user.uuid) {
      const user_uuid = cookies().get("client_uuid").value;
      user = { ...user, uuid: user_uuid };
    }
    if (user.email) {
      await createCustomerIfNull();
      const userFromSession = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
      });
      const subscriptions = await getSubscription();
      const hasSub = subscriptions?.data?.length > 0;
      const subscribed = hasSub
        ? new Date() < new Date(user.expireDate * 1000)
        : false;
      user = {
        ...user,
        ...userFromSession,
        hasSub: hasSub,
        expireDate: hasSub ? subscriptions?.data[0].current_period_end : null,
        subscribed: subscribed,
      };
    }

    return user;
  } catch (e) {
    console.error(e);
  }
};
