import React from "react";
import Cards from "./Components/Cards";
import Table from "../../Components/Table";

export default function Dashboard() {
  const headings = ["Name", "Email", "Phone", "Subject", "Status", "Action"];

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "abc@test.com",
      phone: "120-145-789",
      subject: <SubjectList subs={["maths", "english", "arts"]} />,
      status: true,
      action: "",
    },
    {
      id: 2,
      name: "John Doe",
      email: "abc@test.com",
      phone: "120-145-789",
      subject: "",
      status: false,
      action: "",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* Section 1 - Display */}
      <div className="flex gap-5">
        {/* Section 1.1 - Display - Left */}
        <div className="flex-1 flex flex-col rounded-3xl shadow-md shadow-[#b8b8d470] bg-paleLavender"></div>
        <div className="w-[max-content] flex flex-col gap-2">
          <div>
            <h3 className="text-2xl font-semibold">Overview</h3>
          </div>
          <div className="grid grid-cols-2 grid-flow-row gap-5">
            <Cards />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden flex flex-col gap-3">
        {/* Filter */}
        <div className="flex justify-between">
          <h3 className="text-xl ">Students</h3>
          <select
            name=""
            id=""
            className="border border-zinc-400 rounded-md bg-white "
          >
            <option value="">All Students</option>
            <option value="">Today</option>
            <option value="">Active</option>
            <option value="">Non-Active</option>
          </select>
        </div>

        {/* table */}
        <Table headings={headings} data={data} />
      </div>
    </div>
  );
}

export function SubjectList({ subs }) {
  const sub = {
    maths: "yellow",
    english: "red",
    science: "green",
    arts: "blue",
    painting: "purple",
    gymnastics: "pink",
  };
  // All subjects are predefined      !noted
  // Maths | English | Science | Arts | Painting | Gymnastics

  return (
    <div className="flex flex-wrap gap-2">
      {subs.map((subject, index) => {
        return (
          <div
            key={index}
            className="px-2 py-1 text-[13px] rounded-full border capitalize flex items-center gap-2"
          >
            <span
              className={`w-[5px] h-[5px] rounded-full bg-[${sub[subject]}]`}
            ></span>
            <h1>{subject}</h1>
          </div>
        );
      })}
    </div>
  );
}
