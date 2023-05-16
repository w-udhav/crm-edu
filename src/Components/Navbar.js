import React from "react";
import { SearchIcon } from "./Icons";

export default function Navbar({ location }) {
  return (
    <div className="w-full p-2 flex items-center">
      <div className="flex w-full items-center gap-2 justify-between">
        <div className="flex-1 text-3xl font-medium text-blue-800 capitalize">
          {location.pathname.split("/").pop()}
        </div>
        <div className={`flex-1 flex items-center bg-zinc-200 p-3 rounded-full gap-2`}>
          <SearchIcon className="w-6 h-6 opacity-70" />
          <input
            type="text"
            placeholder="Search for Student"
            className="w-[30rem] bg-transparent outline-none border-none placeholder:text-zinc-700"
          />
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
