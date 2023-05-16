import React from "react";

export default function Cards() {
  const card = [
    {
      id: 1,
      title: "Total Students",
      value: "500",
    },
    {
      id: 2,
      title: "Today's Upcoming",
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
    },
  ];
  return card.map((item) => {
    return (
      <div className="p-8 w-[15rem] rounded-2xl shadow-md">
        <div className="flex flex-col items-center text-center gap-3">
          <div className="text-xl font-bold">{item.title}</div>
          <div className="text-3xl font-bold">{item.value}</div>
        </div>
      </div>
    );
  });
}
