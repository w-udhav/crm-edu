import React from "react";
import { GroupUserIcon } from "../../../Components/Icons";

export default function Cards() {
  const card = [
    {
      id: 1,
      title: "Total",
      value: "500",
      icon: <GroupUserIcon className="w-7 h-7" fill="#0873F7" />,
      color: "bg-[#daeafe]",
    },
    {
      id: 2,
      title: "Today",
      value: "50",
      icon: <GroupUserIcon className="w-7 h-7" fill="#08f78c" />,
      color:"bg-[#dafeee]"
    },
    {
      id: 3,
      title: "Card 3",
      value: "50",
      icon: <GroupUserIcon className="w-7 h-7" fill="#ebf708" />,
      color:"bg-[#fcfeda]"
    },
    {
      id: 4,
      title: "Card 4",
      value: "50",
      type: "multi",
      icon: <GroupUserIcon className="w-7 h-7" fill="#eb1f48" />,
      color:"bg-[#fcdde4]"
    },
  ];
  return card.map((item) => {
    return (
      <div
        key={item.id}
        className="p-8 w-[11rem] h-[10rem] rounded-3xl shadow-md flex justify-center items-center bg-white-og text-charcoal"
      >
        <div className="flex flex-col items-center text-center gap-3">
          <div>
            {item.icon ? (
              <div
                className={`w-12 h-12 rounded-2xl flex justify-center items-center ${item.color}`}
              >
                {item.icon}
              </div>
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-blue-50"></div>
            )}
          </div>
          <div className="text-3xl font-bold">{item.value}</div>
          <div className=" font-medium text-zinc-500 ">{item.title}</div>
        </div>
      </div>
    );
  });
}
