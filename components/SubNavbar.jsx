"use client";

import { logout } from "@/lib/features/userSlice";
import react from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { CiCalendar, CiFileOn, CiHome } from "react-icons/ci";
import { IoCubeOutline, IoLogOutOutline } from "react-icons/io5";
import { TbCheckbox } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const pages = [
  {
    label: "Home",
    icon: <CiHome className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Interface",
    icon: <IoCubeOutline className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Components",
    icon: <CiCalendar className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Pages",
    icon: <CiFileOn className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Forms",
    icon: <TbCheckbox className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Gallery",
    icon: <AiOutlinePicture className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
  {
    label: "Documentation",
    icon: <CgFileDocument className="text-sm lg:text-lg lg:stroke-[1.3]" />,
  },
];

const SubNavbar = () => {
  const dispatch = useDispatch();

  const { username } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [active, setActive] = react.useState("Home");

  return (
    <nav className="px-4 space-x-1 overflow-auto lg:px-8 xl:px-16 lg:py-2 lg:space-x-5 start">
      {pages.map(({ label, icon }) => {
        return (
          <button
            key={label}
            className={`${
              active === label
                ? "text-blue-600 border-b border-blue-600"
                : "text-gray-400"
            } px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wide center space-x-0.5`}
          >
            {icon}
            <span>{label}</span>
          </button>
        );
      })}
      {username && (
        <button
          className={`text-red-500 px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wide center space-x-0.5`}
          onClick={handleLogout}
        >
          <IoLogOutOutline className="text-sm lg:text-lg lg:stroke-[1.3]" />
          <span>Logout</span>
        </button>
      )}
    </nav>
  );
};

export default SubNavbar;
