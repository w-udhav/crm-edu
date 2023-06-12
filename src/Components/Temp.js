import React from "react";
import Navbar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import FormIcon, {
  ApprovalIcon,
  DashboardIcon,
  MailIcon,
  NewLinkIcon,
} from "./Icons";

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
      name: "Approvals",
      route: "./approvals",
      icon: <ApprovalIcon className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "Mail",
      route: "./mail",
      icon: <MailIcon />,
    },
  ];

  const location = useLocation();

  return (
    <div className="min-h-screen w-full bg-grayishBlue bg-opacity-[15%] overflow-y-auto">
      <div className="flex flex-row w-full h-full">
        {/* Left */}
        <div className="w-[16rem] lg:w-[17rem] h-full p-2 fixed lg:relative flex flex-col bg-white-1 gap-9 lg:shadow-none shadow-md ">
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
                  className="flex items-center text-[15px] gap-2 py-[6px] px-4 bg-[#C2E7FF] rounded-full outline-none"
                >
                  <div className="w-5">{item.icon && item.icon}</div>
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>

          <div className="px-2">
            <Link
              to="/form"
              target="_blank"
              className="hover:underline underline-offset-2 text-blue-600 flex items-baseline gap-2"
            >
              <span className="ml-2">Enrollment Form</span>
              <NewLinkIcon className="w-4 h-4" />
            </Link>
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
