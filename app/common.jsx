"use client";
import { useLocalStorage } from "../customHook/useLocalStorage";
import { subtitleXserverApi } from "../constants";

export const languageArray = [
  { name: "All", code: "" },
  { name: "English", code: "eng" },
  { name: "Traditional Chinese", code: "cmn_Hant" },
  { name: "Simplified Chinese", code: "cmn" },
  { name: "Spanish", code: "spa" },
  { name: "Portuguese", code: "por" },
  { name: "Swedish", code: "swe" },
  { name: "Germ", code: "deu" },
  { name: "Arabic", code: "arb" },
  { name: "Russian", code: "rus" },
  { name: "Franch", code: "fra" },
  { name: "Japanese", code: "jpn" },
  { name: "Korean", code: "kor" },
  { name: "Italian", code: "ita" },
  { name: "Polish", code: "pol" },
  { name: "Turkish", code: "tur" },
  { name: "Vietnamese", code: "vie" },
  { name: "Thai", code: "tha" },
  { name: "Hindi", code: "hin" },
  { name: "Malay", code: "msa" },
  { name: "Indonesian", code: "ind" },
];

export const fetchTextFromURL = async (subtitleId, session, client_uuid) => {
  const url = subtitleXserverApi + "/subtitle?id=" + subtitleId;
  const user = await UpdateAndGetUser(session, client_uuid);
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
  }
};

export const remoteCall = async (f, pl, session, client_uuid) => {
  let response;
  try {
    const user = await UpdateAndGetUser(session, client_uuid);
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

export const requestUUID = async (session, client_uuid) => {
  try {
    let url = subtitleXserverApi + "/api2";
    // url = "http://192.168.2.203:12801"+"/api2"
    console.log(url);
    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      5000
    );
    if (response.status == "200") {
      const result = await response.json();
      if (result.rc == "000") {
        return result.data;
      }
    }
    return "xxxx";
  } catch (e) {
    console.error(e);
    return "xxxx";
  }
};

export const UpdateAndGetUser = async (session, client_uuid) => {
  // const session = useSession();
  // const [cookies, setCookie] = useCookies(["client_uuid"])
  //先从local storage中获取user对象
  const [setItem, getItem, removeItem] = useLocalStorage("user");
  //如果local storage中没有user对象，初始化为一个空对象
  let user = getItem();
  if (!user) {
    user = {};
  }
  //检查user对象中是否有uuid，没有的话从api请求一个过来
  if (!user.client_uuid) {
    //let client_uuid = cookies["client_uuid"];
    // if (!client_uuid || client_uuid == '') {
    //   client_uuid = await requestUUID();
    //   setCookie("client_uuid", client_uuid, { path: "/" });
    // }
    Object.assign(user, { client_uuid: client_uuid });
  }
  //如果cookie中没有uuid的话，将client_uuid存入cookie
  // const cookie_client_uuid = cookies["client_uuid"];
  // if(!cookie_client_uuid ||cookie_client_uuid ==''){
  //   setCookie("client_uuid", user.uuid, { path: "/" });
  // }

  //如果带有session参数，检查是否是authenticated的session，如果是的话将session中带有的信息放入user对象
  if (session) {
    if (session.status === "authenticated") {
      user = Object.assign(user, session.data.user);
    }
  }
  //保存user
  setItem(user);
  //返回user
  return user;
};
