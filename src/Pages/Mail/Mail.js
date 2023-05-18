import React from "react";
import MailList from "./Components/MailList";

export default function Mail() {
  return (
    <div className=" h-full flex flex-col gap-5">
      <div className=" rounded-xl overflow-hidden border shadow-md">
        {/* Head */}
        <div className="p-3 flex justify-between items-center bg-gray-300 rounded-t-xl">
          <h1>New Message</h1>
          <button className="px-3 py-1 bg-white-og rounded-full">Clear</button>
        </div>

        {/* Email Details */}
        <div className="flex flex-col bg-white-og">
          {/* To */}
          <div className="border-b px-3 py-[6px] flex items-center gap-2 flex-wrap">
            <span>To:</span>

            {/* To mails */}
            <div className="flex gap-1">
              <span className="border border-gray-300 px-2 py-1 rounded-full text-[13px]">
                mail@test.com
              </span>
              <span className="border border-gray-300 px-2 py-1 rounded-full text-[13px]">
                mail@test.com
              </span>
            </div>
          </div>

          {/* Subject */}
          <input 
            type="text" 
            className="border-b outline-none px-3 py-[6px] text-[15px]"
            placeholder="Subject"
          />
        </div>

        {/* Body */}
        <div className="">
          <textarea
            name=""
            cols="30"
            rows="8"
            className="w-full outline-none p-3 text-[15px] -mb-1"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="p-3 border-t border-gray-300 ">
          <div>
            <button className="bg-blue-600 font-medium text-white px-6 py-2 rounded-full">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Mail Listing */}
      <MailList />
    </div>
  );
}
