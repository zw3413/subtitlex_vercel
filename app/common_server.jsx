import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { options } from "./api/auth/[...nextauth]/options";
const prisma = new PrismaClient();
import { createCustomerIfNull, getSubscription } from "./helpers/billing.js";

const subtitleXserverApi = "https://api.subtitlex.xyz";

export const fetchTextFromURLServerSide = async (subtitleId) => {
  const url = subtitleXserverApi + "/subtitle?id=" + subtitleId;
  const user = await UpdateAndGetUser();
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
    console.log(" fetch subtitle failed, contact administrator." + error);
  }
};

export const searchSubtitleByUUID = async (uuid) => {
  try {
    const f = "2ee9a177-f9e7-4b76-94a1-943c02ef32b5";
    const pl = [uuid];
    const result = await remoteCall(f, pl);
    if (result && result.data && result.data.length > 0) {
      return JSON.parse(result.data);
    } else {
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};

export const remoteCall = async (f, pl) => {
  const user = await UpdateAndGetUser()
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
        uuid: user.uuid,
        function: f,
        params: pl,
      }),
    });
  } catch (e) {
    console.log("subtitlex: remoteCall failed", e);
    return null;
  }
  return await response.json();
};

export const UUID = async () => {
  try {
    const response = await fetch(subtitleXserverApi + "/api2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == "200") {
      const result = await response.json();
      if (result.rc == "000") {
        return result.data;
      }
    }
    return "xxxx";
  } catch (e) {
    console.log(e);
  }
};

export const UpdateAndGetUser = async () => {
  const session = await getServerSession(options);
  let user = { uuid: await UUID() };

  if (!session) {
    return user;
  }
  await createCustomerIfNull();
  const userFromSession = await prisma.user.findFirst({
    where: {
      email: session?.user?.email,
    },
  });
  const subscriptions = await getSubscription();
  const hasSub = subscriptions?.data?.length > 0;

  user = {
    ...user,
    ...userFromSession,
    ...{
      hasSub: hasSub,
      expireDate: hasSub ? subscriptions?.data[0].current_period_end : null,
    }
  };
  const subscribed = hasSub ? new Date() < new Date(user.expireDate * 1000) : false;
  user.subscribed = subscribed;
  return user;
};

// UpdateAndGetUser();
