import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { options } from "./api/auth/[...nextauth]/options.js";
import { headers, cookies } from "next/headers";
import {ResponseCookies} from "next/dist/compiled/@edge-runtime/cookies";
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
        user: user,
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
    return result;
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
    console.log("UpdateAndGetUser_SS");
    
    let user = {};
    console.log("user initialed as ", user);

    //read from session
    const session = await getServerSession(options);
    console.log("get session", { session });
    if (session && session.user) {
      console.log("session.user exists");
      user = session.user;
      console.log("set user to session.user", session.user);
      console.log("user", user);
    }

    //if empty user or without uuid, request uuid from cookies or api
    if (user && !user.uuid) {
      console.log("user has no uuid");
      //let user_uuid_obj = cookies().get("client_uuid");

      const headersStore = headers();

      let user_uuid_obj = cookies().get("client_uuid");

      if (!user_uuid_obj) {
        console.error("no client_uuid in cookie");
        console.error("set a temp uuid here");
        user_uuid_obj = { name: "client_uuid", value: "xxxx", path: "/" };

        console.log("print all cookies")
        console.log(cookies().getAll())

        console.log("print all headers")
        headersStore.forEach((value, key) => {
          console.log(`${key}: ${value}`)
        })

      } else {
        console.log("get client_uuid_obj from cookie", user_uuid_obj);
      }
      const user_uuid = user_uuid_obj.value;
      console.log("set user_uuid: ", user_uuid);
      user = { ...user, uuid: user_uuid };
      console.log("user", user);
    }

    if (user.email) {
      console.log("user has email");
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
      console.log("user", user);
    }

    return user;
  } catch (e) {
    console.error(e);
  }
};
