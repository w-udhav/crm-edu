import React, { useState } from "react";
import { LeftArrowHead, SearchIcon, SettingIcon } from "./Icons";
import { logout } from "../Utils/Firebase/auth";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ location }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    console.log("logout");
    navigate("/auth/login");
  };

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[8vh] p-2 flex items-center">
      <div className="flex w-full items-center gap-2 justify-between">
        
        
        <div className="flex-1 text-3xl font-medium text-blue-800 capitalize">
          {location.pathname.split("/")[1]}
        </div>

        {/* 
        //! Search Bar
        */}
        <div
          className={`lg:flex-1 flex items-center lg:bg-zinc-200 p-3 rounded-full gap-2`}
        >
          <SearchIcon className="w-6 h-6 opacity-70" />
          {
            
          }
          <input
            type="text"
            placeholder="Search for Student"
            className="hidden lg:block max-w-[30rem] min-w-[18rem] bg-transparent outline-none border-none placeholder:text-zinc-700"
          />
        </div>

        {/*
        //! Profile
        */}
        <div className="lg:flex-1 flex justify-end items-center relative">
          {isOpen && <LeftArrowHead className="w-3 h-3" />}
          <button
            onClick={handleIsOpen}
            className={` ${
              isOpen && "rotate-45 translate-x-2"
            } " transition-all"`}
          >
            <SettingIcon className="lg:w-6 lg:h-6" />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="absolute shadow-md backdrop-blur-lg rounded-[5px] right-10 top-0 overflow-hidden"
              >
                <div className="flex flex-col items-center text-[15px]">
                  <div className="py-2 px-5">Profile</div>
                  <div className="py-2 px-5">Settings</div>
                  <div className="py-2 px-5 border-t border-zinc-300 w-full text-center hover:bg-red-200 bg-red-100 transition-all">
                    <button onClick={handleLogout} className="text-red-500 ">
                      Logout
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
