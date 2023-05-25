import React from "react";

export default function Medical({ isEdit, data }) {
  const dataField = [
    {
      id: 1,
      name: "Food Allergy?",
      value: data.allergicFood,
    },
    {
      id: 2,
      name: "On any Medication?",
      value: data.allergicMedication,
    },
    {
      id: 3,
      name: "Allergic to any medication?",
      value: data.healthProblem,
    },
    {
      id: 4,
      name: "Suffering from any health problems?",
      value: data.medications,
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
          {dataField.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600"> {item.name} </p>
                <div className="flex-1 flex flex-col gap-1">
                  {item.value !== "No" ? (
                    <div className="flex-1 flex flex-col gap-1">
                      <p className="flex-1 font-medium"> Yes </p>
                      <p className="flex-1"> {item.value} </p>
                    </div>
                  ) : (
                    <p className="flex-1 font-medium"> {item.value} </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
