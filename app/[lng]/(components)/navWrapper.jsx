"use client";
import Nav from "./Nav";
import { useState, useEffect } from "react";
import { useLocalStorage } from "../../../customHook/useLocalStorage";
import { UpdateAndGetUser_nouuid } from "../../common";
import { Link } from "next/link";
export default function NavWrapper({ lng }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function updateAndGetUser() {
      const u = await UpdateAndGetUser_nouuid();
      setUser(u);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [setItem, getItem, removeItem] = useLocalStorage("user");
      setItem(u);
    }
    updateAndGetUser();
  }, []);


  return (
    <>
        {user?.hasSub ? (
          <button className="ms-4 flex h-[24px] text-color-jable bg-gradient-to-r from-purple-600 to-red-500 text-base hover:text-white   py-0 sm:py-0 rounded-lg shadow-sm px-2">
            <a href={`/${lng}/Member`} className="">
              Premium
            </a>
          </button>
        ) : (
          <button className="ms-4 flex h-[24px] text-color-jable bg-gradient-to-r from-purple-600 to-red-500 text-base hover:text-white   py-0 sm:py-0 rounded-lg shadow-sm px-2">
            <a href={`/${lng}/Member`} className="">
              Get Premium
            </a>
          </button>
        )}
        <div className="hidden sm:flex grow ">
          <Nav lng={lng} user={user} />
        </div>
    </>
  );
}
