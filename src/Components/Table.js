import React, { useState } from "react";
import SubjectList from "./SubjectList";
import { useNavigate } from "react-router-dom";
import { CommentIcon, ReloadIcon } from "./Icons";
import Loader from "./Loader";
import CommentBox from "./CommentBox";

export default function Table({ headings, data, loading, error, fetchData }) {
  const [modal, setModal] = useState(false); //? To show the modal of comment
  const [comment, setComment] = useState(null); //? To store the comment of the student to be deleted or edited

  const navigate = useNavigate();

  const handlleRowClick = (id) => {
    navigate(`./student/${id}`);
  };

  const handleComment = (e, id) => {
    setModal(true);
    setComment(id);
  };

  const handleModal = (props) => {
    setModal(props);
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
              >
                <td
                  className=" px-2 py-1"
                  onClick={() => handlleRowClick(row._id)}
                >
                  {row.firstName}
                </td>
                <td
                  className=" px-2 py-1"
                  onClick={() => handlleRowClick(row._id)}
                >
                  {row.email}
                </td>
                <td
                  className=" px-2 py-1"
                  onClick={() => handlleRowClick(row._id)}
                >
                  {row.phone}
                </td>
                <td
                  className=" px-2 py-1"
                  onClick={() => handlleRowClick(row._id)}
                >
                  <SubjectList subs={row.tutoringDetail.subjects} />
                </td>
                <td className=" px-2 py-1">
                  {row.status ? (
                    <span className="text-green-500 rounded-full">Active</span>
                  ) : (
                    <span className="text-red-500 rounded-full">Inactive</span>
                  )}
                </td>
                <td>
                  <button onClick={() => handleComment()}>
                    <CommentIcon />
                  </button>
                </td>
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

      {/* //? This is the comment modal */}
      {modal && <CommentBox handleModal={handleModal} />}
    </div>
  );
}
