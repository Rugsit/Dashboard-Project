"use client";
import { useState } from "react";
import { Dashboard, List } from "./Icon";

export default function Navbar() {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  return (
    <>
      <div className="flex p-4 items-center bg-white z-20 fixed right-0 left-0 h-[85px] justify-between">
        <div className="flex items-center gap-2 ">
          <img src="/profile.jpg" className="rounded-full w-[50px]" />
          <p className="font-bold lg:text-[18px] text-[16px]">
            Rugsit Rungrattanachai
          </p>
        </div>
        <button
          onClick={() => {
            setIsOptionOpen(!isOptionOpen);
          }}
        >
          <List
            width={20}
            height={20}
            className="z-40 cursor-pointer block lg:hidden"
          />
        </button>
        <div
          className={
            "transition-all left-[20px] right-[20px] absolute -bottom-[60px] rounded-lg backdrop-blur-md block lg:hidden" +
            (!isOptionOpen ? " opacity-0 pointer-events-none scale-90" : "")
          }
        >
          <button className="flex gap-3 items-center w-full hover:bg-[#e7f5ff] rounded-lg p-3 cursor-pointer transition-all">
            <Dashboard width={20} height={20} fill="#2277f7" />
            <p className="font-medium text-[#2277f7]">Dashboard</p>
          </button>
        </div>
      </div>
    </>
  );
}
