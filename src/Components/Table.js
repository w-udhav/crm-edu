import React from "react";
import SubjectList from "./SubjectList";
import { useNavigate } from "react-router-dom";

export default function Table({ headings, data }) {
  const navigate = useNavigate();

  const handlleRowClick = (id) => {
    navigate(`./student/${id}`);
  };
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
          {data &&
            data.map((row) => (
              <tr
                key={row._id}
                className="hover:bg-blue-50 transition-all ease-in-out cursor-pointer"
                onClick={() => handlleRowClick(row._id)}
              >
                <td className=" px-2 py-1">{row.firstName}</td>
                <td className=" px-2 py-1">{row.email}</td>
                <td className=" px-2 py-1">{row.phone}</td>
                <td className=" px-2 py-1">
                  <SubjectList subs={row.tutoringDetail.subjects} />
                </td>
                <td className=" px-2 py-1">
                  {row.status ? (
                    <span className="text-green-500 rounded-full">Active</span>
                  ) : (
                    <span className="text-red-500 rounded-full">Inactive</span>
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
