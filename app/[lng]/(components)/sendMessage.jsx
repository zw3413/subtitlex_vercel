/* global chrome */
"use client";
import { useState, useEffect } from "react";

const sendTokenToChromeExtension = ({ extensionId, user }) => {
  console.log("sending message");
  console.log(user);
  console.log(extensionId);
  chrome.runtime.sendMessage(
    extensionId,
    { from: "jh_web", type: "sendToken", data: user },
    (response) => {
      if (!response?.success) {
        console.log("error sending message", response);
        return response;
      }
      console.log("Sucesss ::: ", response.message);
    }
  );
};

function SendMessage(user) {
  const extensionId = "jleagfpeiplocfdkajcpgcadnpipmkcl";
  useEffect(() => {
    try{
    sendTokenToChromeExtension({ extensionId, user });
    }catch(e){
      console.log(e);
    }
  }, [user]);
}

export default SendMessage;
