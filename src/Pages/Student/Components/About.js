import React from "react";

export default function About() {
  const data = [
    {
      id: 1,
      name: "Full Name",
      value: "John Doe",
    },
    {
      id: 2,
      name: "Email",
      value: "abc@test.com",
    },
    {
      id: 3,
      name: "Date of Birth",
      value: "01/01/2000",
    },
    {
      id: 4,
      name: "Gender",
      value: "Male",
    },
    {
      id: 5,
      name: "School",
      value: "ABC School",
    },
    {
      id: 6,
      name: "Class",
      value: "10th",
    },
  ];

  const address = [
    {
      id: 1,
      name: "Address Line 1",
      value: "123, ABC Street",
    },
    {
      id: 2,
      name: "Address Line 2",
      value: "XYZ",
    },
    {
      id: 3,
      name: "City",
      value: "ABC",
    },
    {
      id: 4,
      name: "State",
      value: "XYZ",
    },
    {
      id: 5,
      name: "Country",
      value: "ABC",
    },
    {
      id: 6,
      name: "Pincode",
      value: "123456",
    },
  ];

  return (
    <div className="grid grid-cols-2 flex-col xl:flex-row gap-10">
      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">
          Student's personal information
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
                <p className="flex-1"> {item.value} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">Address</h3>

        {/* Content container */}
        <div className="flex flex-col">
          {address.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
              >
                <p className="flex-1 text-gray-600"> {item.name} </p>
                <p className="flex-1"> {item.value} </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex-1 bg-green-100 flex flex-col gap-3 rounded-xl border border-zinc-300 p-5">
        <h3 className="capitalize text-gray-400 text-sm">Payment</h3>

        {/* Content container */}
        <div className="flex flex-col">
          <div className=" px-5 py-5 rounded-md transition-all ease-linear flex gap-3">
            <p className="flex-1 text-gray-600"> Payment Mode </p>
            <p className="flex-1"> Ezi-debit </p>
          </div>
        </div>
      </div>
    </div>
  );
}
