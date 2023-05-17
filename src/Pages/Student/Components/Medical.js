import React from "react";

export default function Medical() {
  const data = [
    {
      id: 1,
      name: "Food Allergy?",
      value: "No",
      other: null,
    },
    {
      id: 2,
      name: "On any Medication?",
      value: "Yes",
      other: "Reason for ....",
    },
    {
      id: 3,
      name: "Allergic to any medication?",
      value: "No",
      other: null,
    },
    {
      id: 4,
      name: "Suffering from any health problems?",
      value: "Yes",
      other:
        "Reason for Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam maxime incidunt quas repellendus ex placeat, odit quidem omnis nihil? Quo quae inventore repellendus voluptates ex optio ullam quisquam corporis! ....",
    },
  ];

  return (
    <div className="flex gap-10">
      <div className="w-1/2 flex flex-col gap-3 rounded-xl  border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Student's Medical Information
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
                <div className="flex-1 flex flex-col">
                  <p className="flex-1"> {item?.value ? item.value : "N/A"} </p>
                  {item.other && <p className="flex-1"> {item.other} </p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
