import React from "react";
import SubjectList from "./SubjectList";
import { useNavigate } from "react-router-dom";
import { ReloadIcon } from "./Icons";
import Loader from "./Loader";

export default function Table({ headings, data, loading, error, fetchData }) {
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
            !loading &&
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
          {
            // ! This is the loading state
            loading && (
              <tr>
                <td colSpan={6} className="text-center p-2">
                  <Loader />
                </td>
              </tr>
            )
          }
          {
            // ! This is the no data state
            !loading && data && data.length === 0 && !error && (
              <tr>
                <td colSpan={6} className="text-center p-2">
                  No Data Found
                </td>
              </tr>
            )
          }

          {
            // ! This is the error state
            error && (
              <tr>
                <td colSpan={6} className="text-center py-3 px-2">
                  <div className=" w-full flex flex-col gap-2 items-center justify-center">
                    <p className="text-red-500 text-xl">{error}</p>
                    <button
                      onClick={fetchData}
                      className="flex gap-1 items-center p-2 bg-gray-200 hover:bg-gray-300 rounded-xl"
                    >
                      <span>Retry</span>
                      <ReloadIcon />
                    </button>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
