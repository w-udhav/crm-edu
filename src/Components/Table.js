import React from "react";

export default function Table({ headings, data }) {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full text-left rounded-xl">
        <thead>
          <tr className="bg-gray-200">
            {headings.map((head, index) => (
              <th key={index} className="p-2  rounded-">
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
              <td className=" px-2 py-1">{row.name}</td>
              <td className=" px-2 py-1">{row.email}</td>
              <td className=" px-2 py-1">{row.phone}</td>
              <td className=" px-2 py-1">{row.subject}</td>
              <td className=" px-2 py-1">
                {row.status ? (
                  <span className="bg-green-500 text-white px-2 py-[2px] rounded-full">
                    Active
                  </span>
                ) : (
                  <span className="bg-red-500 text-white px-2 py-[2px] rounded-full">
                    Inactive
                  </span>
                )}
              </td>
              <td className=" px-2 py-1">{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
