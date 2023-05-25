import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Table from "../../Components/Table";
import { getStudents } from "../../Utils/Api/Api";

export default function Dashboard() {
  const headings = ["Name", "Email", "Phone", "Subject", "Status", "Action"];

  // const data = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     email: "abc@test.com",
  //     phone: "120-145-789",
  //     subject: <SubjectList subs={["maths", "english", "arts"]} />,
  //     status: true,
  //     action: "",
  //   },
  //   {
  //     id: 2,
  //     name: "John Doe",
  //     email: "abc@test.com",
  //     phone: "120-145-789",
  //     subject: "",
  //     status: false,
  //     action: "",
  //   },
  // ];

//? Data from API   {
//     "_id": "646b062195c8ade227e4222d",
//     "firstName": "Ujjwal",
//     "email": "ujjwal@gmail.com",
//     "phone": 9559971272,
//     "tutoringDetail": {
//         "subjects": [
//             "Maths",
//             "Science"
//         ]
//     },
//     "status": "Inactive"
// } 

  const [data, setData] = useState([]);

  useEffect(() => {
    getStudents().then((data) => setData(data));
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {/* Section 1 - Display */}
      <div className="flex gap-5">
        {/* Section 1.1 - Display - Left */}
        <div className="flex-1 flex flex-col rounded-3xl p-3 shadow-md shadow-[#b8b8d470] bg-paleLavender">
          <h1 className="text-4xl font-semibold  "> Chart Overview </h1>
        </div>
        <div className="w-[max-content] flex flex-col gap-2">
          <div>
            <h3 className="text-3xl font-semibold">Overview</h3>
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
