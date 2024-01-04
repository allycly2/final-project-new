import React from "react";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { CiViewList } from "react-icons/ci";

export const SidebarData = [
  {
    title: "HOME",
    icon: <FaHome />,
    link: "./home",
  },
  {
    title: "My Schedule & Diary",
    icon: <CiViewList />,
    link: "./to-do-list",
  },
  {
    title: "Event Calendar",
    icon: <MdEvent />,
    link: "./event",
  },
  {
    title: "Holidays Worldwide",
    icon: <MdEvent />,
    link: "./event2",
  },
];
