import type { NextPage } from "next";
import NextImage from "next/image";
import { FlagIcon,  PlayIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon,UserGroupIcon, ViewGridIcon } from "@heroicons/react/solid";

import HeaderIcon from "./HeaderIcon";
import { SVGProps } from "react";

const Header: NextPage = () => {
  return (
    <>
    <div className="sticky top-0 z-50 bg-white flex items-center  p-2 lg:px-5 shadow-md">
        {/*Left*/}
        <div className={"flex item-center"}>

        <NextImage width={50} height={50} src={"/logo.png"} />
        <div className={"flex  ml-2 items-center rounded-full bg-gray-100 p-2"}>
          <SearchIcon className={"h-6  text-gray-600"} />
          <input
            className="flex ml-2 bg-transparent items-center outline-none placeholder-gray-500 flex-shrink hidden md:inline-flex"
            placeholder={"Search"}
          />
        </div>
      </div>

        {/*Center*/}
        <div className="flex flex-grow justify-center">
            <div className="flex space-x-6 md:space-x-2">

            <HeaderIcon active={true} Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
            </div>
        </div>
        <div className="flex items-center sm:space-x-2 justify-end">
            <ViewGridIcon className="icon"/>
            <ChatIcon className="icon"/>
            <BellIcon className="icon"/>
            <ChevronDownIcon className="icon"/>

        </div>
    </div>
    </>
  );
};

export default Header;
