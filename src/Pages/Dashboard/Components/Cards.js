import React from "react";
import { GroupUserIcon } from "../../../Components/Icons";

export default function Cards() {
  const card = [
    {
      id: 1,
      title: "Total",
      value: "500",
      icon: <GroupUserIcon className="w-6 h-6" fill="#0873F7" />,
      color: "#0873F7",
    },
    {
      id: 2,
      title: "Today",
      value: "50",
    },
    {
      id: 3,
      title: "Card 3",
      value: "50",
    },
    {
      id: 4,
      title: "Card 4",
      value: "50",
      type: "multi",
    },
  ];
  return card.map((item) => {
    return (
      <div className="p-8 w-[11rem] h-[10rem] rounded-2xl shadow-md flex justify-center items-center">
        <div className="flex flex-col items-center text-center gap-3">
          <div>
            {item.icon ? (
              <div
                className={`w-12 h-12 rounded-full flex justify-center items-center`}
              >
                {item.icon}
              </div>
            ) : (
              <div className="w-12 h-12 rounded-full bg-blue-50"></div>
            )}
          </div>
          <div className="text-3xl font-bold">{item.value}</div>
          <div className=" font-medium text-zinc-500 ">{item.title}</div>
        </div>
      </div>
    );
  });
}
