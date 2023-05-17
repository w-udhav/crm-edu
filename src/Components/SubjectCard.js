import React from "react";

export default function SubjectCard() {
  const data = [
    {
      id: 1,
      name: "Monday",
      value: "02:00PM",
    },
    {
      id: 2,
      name: "Wednesday",
      value: "03:00PM",
    },
    {
      id: 3,
      name: "Thursday",
      value: "03:00PM",
    },
  ];
  return (
    <div className="w-[16rem] min-h-[16rem] bg-red-400 text-white rounded-2xl p-5 flex flex-col gap-5 overflow-hidden">
      {/* Logo */}
      <div className="w-16 h-16 rounded-full bg-blue-200"></div>

      <div>
        <h3 className="text-2xl  font-bold">Mathematics</h3>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="border- hover:bg-gray-100 border-gray-300 hover:px-3 hover:rounded-t-md transition-all ease-linear flex items-center gap-3"
            >
              <p className="flex-1 "> {item.name} </p>
              <p className="flex-1"> {item?.value ? item.value : "N/A"} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
