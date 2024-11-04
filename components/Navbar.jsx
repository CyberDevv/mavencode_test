"use client";

import Image from "next/image";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { profileData, loading, error } = useSelector((state) => state.linkedIn);

  return (
    <nav className="px-4 py-3 lg:px-8 xl:px-16 ">
      <div className="between">
        <h5 className="text-xl font-bold lg:text-3xl ">tabler</h5>

        <div className="space-x-4 lg:space-x-8 end">
          <a href={"https://github.com/CyberDevv/mavencode_test"}>
            <button className="md:block hidden px-2 py-1 lg:px-3 lg:py-1.5 text-xs lg:text-sm font-medium text-blue-600 border border-blue-600 rounded hover:text-white hover:bg-blue-500">
              Source Code
            </button>
          </a>

          <button className="relative">
            <IoIosNotificationsOutline className="lg:text-2xl" />
            <span className="absolute top-0 block w-1.5 h-1.5 lg:w-2 lg:h-2 bg-red-500 rounded-full right-0 lg:-right-1 top animate-pulse" />
          </button>

          <div className="space-x-1 lg:space-x-2 start">
            <div className="w-8 h-8 bg-gray-200 rounded-full lg:h-14 lg:w-14" />

            <div className="lg:space-y-1">
              <h6 className="text-xs font-bold tracking-wide lg:text-sm">
                {profileData?.["Country_text"]}
              </h6>
              <p className="text-xs tracking-wide text-gray-600 lg:text-sm">
                {profileData?.["Last Update"]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 md:hidden end">
        <button className="px-1 py-0.5 text-[10px] font-medium text-blue-600 border border-blue-600 rounded hover:text-white hover:bg-blue-500">
          Source Code
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
