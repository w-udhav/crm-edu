import React from "react";
import { SearchIcon } from "./Icons";
import { logout } from "../Utils/Firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar({ location }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    console.log("logout");
    navigate("/auth/login");
  };
  return (
    <div className="w-full h-[8vh] p-2 flex items-center">
      <div className="flex w-full items-center gap-2 justify-between">
        <div className="flex-1 text-3xl font-medium text-blue-800 capitalize">
          {location.pathname.split("/").pop()}
        </div>
        <div
          className={`flex-1 flex items-center bg-zinc-200 p-3 rounded-full gap-2`}
        >
          <SearchIcon className="w-6 h-6 opacity-70" />
          <input
            type="text"
            placeholder="Search for Student"
            className="w-[30rem] bg-transparent outline-none border-none placeholder:text-zinc-700"
          />
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={handleLogout}
            className=" px-4 py-2 bg-red-500 text-white text-[14px] font-medium rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
