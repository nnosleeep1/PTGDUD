import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import dashboard from "../assets/Lab_05/dashbord.png";
import pieChart from "../assets/Lab_05/Piechart.png";
import logo from "../assets/Lab_05/logo.png";
import code from "../assets/Lab_05/Code.png";
import groups from "../assets/Lab_05/Groups.png";
import folder from "../assets/Lab_05/Folder.png";
import sms from "../assets/Lab_05/sms.png";
import group from "../assets/Lab_05/Group.png";

const Menu = () => {
  

  const menuItems = [
    { key: 1, icon: dashboard, label: "Dashboard", path: "/" },
    { key: 2, icon: folder, label: "Project", path: "/project" },
    { key: 3, icon: groups, label: "Teams", path: "/teams" },
    { key: 4, icon: pieChart, label: "Analytics", path: "/analytic" },
    { key: 5, icon: sms, label: "Messages", path: "/message" },
    { key: 6, icon: code, label: "Integrations", path: "/integration" },
  ];

  return (
    <div className="w-60">
      <img src={logo} alt="Logo" className="w-[150px] p-5" />

      <ul className="space-y-4 mt-5 ml-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
          
              <li
                className={`flex items-center gap-4 cursor-pointer p-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-[#f88db4] text-white font-semibold"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                <img src={item.icon} alt={item.label} className="w-5" />
                <h1>{item.label}</h1>
              </li>
           
          );
        })}
      </ul>

      <div className="rounded-2xl bg-indigo-100 p-6 flex flex-col items-center space-y-4 mt-10">
        <img src={group} alt="Group" className="w-24 h-24 object-contain" />
        <h1 className="font-bold text-xl text-center text-indigo-900">
          V2.0 is available
        </h1>
        <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default Menu;
