import React from "react";

export default function Address({ isEdit, data }) {
  const dataFields = [
    {
      id: 1,
      name: "Address Street",
      value: data.addressStreet,
    },
    {
      id: 2,
      name: "PostCode",
      value: data.postCode,
    },
    {
      id: 3,
      name: "Suburb",
      value: data.suburb,
    },

    {
      id: 6,
      name: "Parent's Email",
      value: data.parentsEmail,
    },
  ];

  return (
    <div className="grid grid-cols-2 flex-col xl:flex-row gap-10">
      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Address Inforamtion
        </h3>

        {/* Content container */}
        <div className="flex flex-col transition-all ease-linear">
          {dataFields.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600 "> {item.name} </p>
                {isEdit ? (
                  <input
                    className="flex-1 p-1 rounded-md"
                    type="text"
                    value={item.value}
                  />
                ) : (
                  <p className="flex-1"> {item.value} </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
