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
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="min-w-[45rem] max-w-full flex flex-col gap-3 rounded-2xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Address Inforamtion
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
                <p className="flex-1 text-gray-600 "> {item.name} </p>
                {isEdit ? (
                  <input
                    className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-zinc-300"
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
