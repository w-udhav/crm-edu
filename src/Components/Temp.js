import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import FormIcon, { DashboardIcon, MailIcon } from "./Icons";

export default function Temp({ children }) {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      route: "./",
      icon: <DashboardIcon />,
    },
    {
      id: 2,
      name: "Enrollment Form",
      route: "/form",
      target: "_blank",
      icon: <FormIcon />,
    },
    {
      id: 3,
      name: "Mail",
      route: "./mail",
      icon: <MailIcon />,
    },
    {
      id: 4,
      name: "Student _dev_",
      route: "./student",
    },
  ];

  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-grayishBlue bg-opacity-[15%] overflow-y-auto">
      <div className="flex flex-row w-full h-full">
        {/* Left */}
        <div className="w-[16rem] lg:w-[18rem] h-full p-4 fixed lg:relative flex flex-col bg-white-1 gap-9 lg:shadow-none shadow-md ">
          {/* Title */}
          <h3 className="font-medium text-red-500 text-lg">
            High<span className="text-black-1">Hopes</span>
          </h3>

          <div className="flex flex-col gap-1">
            {links.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.route}
                  target={item.target && item.target}
                  className="flex items-center text-[15px] gap-2 py-2 px-4 bg-[#C2E7FF] rounded-full outline-none"
                >
                  <div className="w-5">{item.icon && item.icon}</div>
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="w-full max-h-[100vh] overflow-hidden">
          <Navbar location={location} />
          <div className="h-[92vh] p-2 overflow-y-auto">
            <div className="w-full h-full rounded-2xl">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
