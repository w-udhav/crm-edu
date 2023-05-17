import React from "react";

export default function Parents() {
  const data = [
    {
      id: 1,
      name: "Name",
      value: "John Doe",
    },
    {
      id: 2,
      name: "Relation",
      value: "Father",
    },
    {
      id: 3,
      name: "Contact",
      value: "1234567890",
    },
  ];

  return (
    <div className="flex gap-10">
      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Student's Parents Information - 1
        </h3>

        {/* Content container */}
        <div className="flex flex-col transition-all ease-linear">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600"> {item.name} </p>
                <p className="flex-1"> {item?.value ? item.value : "N/A"} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Student's Parents Information - 2
        </h3>

        {/* Content container */}
        <div className="flex flex-col">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600"> {item.name} </p>
                <p className="flex-1"> {item?.value ? item.value : "N/A"} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
