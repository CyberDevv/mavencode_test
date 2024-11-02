"use client"

import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { details } = useSelector((state) => state.user);

  return (
    <nav className="px-4 lg:px-8 xl:px-16 py-3 ">
      <div className="between">
        <h5 className="text-xl lg:text-3xl font-bold ">tabler</h5>

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
            <div className="bg-gray-200 rounded-full h-8 w-8 lg:h-14 lg:w-14" />

            <div className="lg:space-y-1">
              <h6 className="text-xs lg:text-sm font-bold tracking-wide">
                {details?.name}
              </h6>
              <p className="text-xs lg:text-sm tracking-wide text-gray-600">
                {details?.role}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden end mt-2">
        <button className="px-1 py-0.5 text-[10px] font-medium text-blue-600 border border-blue-600 rounded hover:text-white hover:bg-blue-500">
          Source Code
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
