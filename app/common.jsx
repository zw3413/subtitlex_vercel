import { useLocalStorage } from "../customHook/useLocalStorage";

const subtitleXserverApi = "https://api.subtitlex.xyz";


export const fetchTextFromURL = async (subtitleId) => {
  const url = subtitleXserverApi + "/subtitle?id=" + subtitleId;
  const user = await updateAndGetUser();
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
    console.log(
      " fetch subtitle failed, contact administrator." + error
    );
  }
};

export const remoteCall = async (f, pl) => {
  let response;
  try {
    const user = await updateAndGetUser();
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

export const updateAndGetUser = async (session) => {
  const [setItem, getItem, removeItem] = useLocalStorage("user");
  let user = getItem();
  if (!user) {
    user = {};
  }
  if (!user.uuid) {
    Object.assign(user, { uuid: await UUID() });
    setItem(user);
  }
  if (session && session.status == "authenticated") {
    if (session.status === "authenticated") {
      const user = Object.assign(getItem(), session.data.user);
      setItem(user);
    }
  }
  return user;
};

updateAndGetUser();
