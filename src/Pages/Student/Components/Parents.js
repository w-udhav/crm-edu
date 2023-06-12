
import React from "react";

export default function Parents({ isEdit, data }) {
  const dataFields = [
    {
      id: 1,
      name: "Name",
      value: data.name,
      type: "text",
    },
    {
      id: 2,
      name: "Relation",
      value: data.relation,
      type: "text"
    },
    {
      id: 3,
      name: "Phone",
      value: data.phone,
      type: "number",
    },
  ];

  return (
    <div className="grid grid-cols-2 flex-col xl:flex-row gap-10">
      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Student's Parents Information - 1
        </h3>

        {/* Content container */}
        <div className="flex flex-col transition-all ease-linear">
          {dataFields.map((item) => {
            return (
              <div
                key={item.id}
                  className="borde hover:bg-blue-100 border-gray-300 hover:scale-[1.04] hover:px-2 py-3 hover:rounded-t-md transition-all ease-linear flex gap-3"
                  // className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600"> {item.name} </p>
                <p className="flex-1 capitalize"> {item?.value ? item.value : "N/A"} </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
