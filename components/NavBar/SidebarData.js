import React from "react";
import { FaHome } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { CiViewList } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { PiAddressBook } from "react-icons/pi";

export const SidebarData = [
  {
    title: "HOME",
    icon: <FaHome />,
    link: "./",
  },
  {
    title: "To Do List",
    icon: <CiViewList />,
    link: "./ToDoList",
  },
  {
    title: "Diary",
    icon: <PiAddressBook />,
    link: "./Diary",
  },
  {
    title: "Expense Tracker",
    icon: <AiOutlineDollar />,
    link: "./ExpenseTracker",
  },
  {
    title: "Holidays Worldwide",
    icon: <MdEvent />,
    link: "./Holiday",
  },
  {
    title: "Login",
    icon: <MdEvent />,
    link: "./Login",
  },
  {
    title: "Signup",
    icon: <MdEvent />,
    link: "./Signup",
  },
];
