import React from "react";

export default function MailList() {
  const [selectAll, setSelectAll] = React.useState(false);
  const [selected, setSelected] = React.useState([]);

  const headings = ["Name", "Student's Email", "Parent's Email", "Status"];
  const data = [
    {
      id: 1,
      name: "Full Name",
      stuEmail: "abc@test.com",
      paEmail: "parent@mail.com",
    },
    {
      id: 2,
      name: "Full Name",
      stuEmail: "abc@test.com",
      paEmail: "parent@mail.com",
    },
    {
      id: 3,
      name: "Full Name",
      stuEmail: "abc@test.com",
      paEmail: "parent@mail.com",
    },
  ];

  console.log(selected);

  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="overflow-x-auto rounded-xl ">
        <table className="w-full text-left rounded-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">
                <div className="relative flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    className="z-10 cursor-pointer w-4 h-4"
                    onChange={(e) => setSelectAll(e.target.checked)}
                    checked={selectAll}
                  />
                  {/* <div className="bg-blue-100 absolute w-6 h-6 p-4 z-0 rounded-full"></div> */}
                </div>
              </th>
              {headings.map((head, index) => (
                <th key={index} className="p-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={row.id}
                className="hover:bg-blue-50 transition-all ease-in-out"
              >
                <td className="w-1 py-1 px-4">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    value={row.paEmail}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelected([...selected, e.target.value]);
                      } else {
                        setSelected(
                          selected.filter((item) => item !== e.target.value)
                        );
                      }
                    }}
                  />
                </td>
                <td className=" px-2 py-1">{row.name}</td>
                <td className=" px-2 py-1">{row.stuEmail}</td>
                <td className=" px-2 py-1">{row.paEmail}</td>
                <td className=" px-2 py-1">
                  {row.status ? (
                    <span className="text-green-500 rounded-full">Active</span>
                  ) : (
                    <span className="text-red-500 rounded-full">Inactive</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
