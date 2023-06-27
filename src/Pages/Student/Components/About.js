import React, { useState } from "react";
import SubjectCard from "../../../Components/SubjectCard";
import { DeleteIcon, EditIcon } from "../../../Components/Icons";
import { addComment, removeComment } from "../../../Utils/Api/Api";

export default function About({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [commentsList, setCommentList] = useState(data.comments);
  const [errorComment, setErrorComment] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);

  const [subjects, setSubjects] = useState(
    data.tutoringDetail.subjects ? data.tutoringDetail.subjects : false
  );
  const formatDate = (date) => {
    const formatedDate = new Date(date).toISOString().split("T")[0];
    return formatedDate;
  };

  const defaultForm = {
    firstName: data.firstName,
    lastName: data.lastName,
    dob: formatDate(data.dob),
    gender: data.gender,
    schoolName: data.schoolName,
    schoolYear: data.schoolYear,
  };

  const [form, setForm] = useState(defaultForm);

  const handleChange = (e, field) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: e.target.value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const dataFields = [
    {
      id: 1,
      name: "First Name",
      fieldName: "firstName",
      type: "text",
    },
    {
      id: 7,
      name: "Last Name",
      fieldName: "lastName",
      type: "text",
    },
    {
      id: 3,
      name: "Date of Birth",
      fieldName: "dob",
      type: "date",
    },
    {
      id: 4,
      name: "Gender",
      fieldName: "gender",
      type: "text",
      options: ["Male", "Female", "Other"],
    },
    {
      id: 5,
      name: "School Name",
      fieldName: "schoolName",
      type: "text",
    },
    {
      id: 6,
      name: "School Year",
      fieldName: "schoolYear",
      type: "number",
    },
  ];

  // Comment functions
  const handleChangeComment = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    setLoadingComment(true);
    const tempComment = { text: newComment };
    try {
      await addComment(data._id, tempComment);
      setCommentList((prevList) => [...prevList, tempComment]);
      setNewComment("");
      setLoadingComment(false);
    } catch (error) {
      setErrorComment(error.message);
      setLoadingComment(false);
      console.log(error.message);
    }
  };

  const deleteSpecificComment = async (commentId) => {
    setLoadingComment(true);
    try {
      var tempList = [];
      for (var i = 0; i < commentsList.length; i++) {
        if (commentsList[i]["_id"] != commentId) {
          tempList.push(commentsList[i]);
        }
      }
      setCommentList(tempList);
      await removeComment(data._id, commentId);
      console.log("here");
      setLoadingComment(false);
    } catch (error) {
      setErrorComment(error.message);
      console.log(error);
      setLoadingComment(false);
    }
  };

  return (
    <div className="flex flex-wrap gap-x-7 gap-y-12 pr-2 w-[28rem] xl:w-full">
      <div className="flex-1 flex flex-col gap-3">
        <div className="pb-1 border-b border-zinc-300 flex gap-1 items-center justify-between">
          <h1 className="text-2xl">Personal Information</h1>
          {isEdit ? (
            <button
              onClick={() => setIsEdit(false)}
              className="px-2 py-1 rounded-md bg-red-500 text-white text-sm font-medium"
            >
              Cancel
            </button>
          ) : (
            <button onClick={() => setIsEdit(true)}>
              <EditIcon className="w-6 h-6" />
            </button>
          )}
        </div>
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          {dataFields.map((item) => {
            return (
              <div key={item.id} className="flex flex-col gap-1 text-[14px]">
                <h2 className=" font-semibold">{item.name}</h2>
                <div className="flex items-center gap-2">
                  <input
                    type={item.type}
                    disabled={!isEdit}
                    value={form[item.fieldName]}
                    onChange={(e) => handleChange(e, item.fieldName)}
                    className="text-[15px] focus:outline-2 focus:outline-offset-1 focus:outline-blue-600 focus:bg-blue-50  border border-zinc-400 bg-zinc-100 rounded-md w-[28rem] px-2 py-1"
                  />
                  {isEdit && (
                    <h3 className="text-amber-700">
                      {defaultForm[item.fieldName]}
                    </h3>
                  )}
                </div>
              </div>
            );
          })}

          <button
            type="submit"
            onClick={handleUpdate}
            disabled={!isEdit}
            className="max-w-md py-1 px-2 rounded-md text-white text-[15px] font-semibold bg-green-600 hover:bg-green-500 disabled:bg-gray-500"
          >
            <h1>Save Changes</h1>
          </button>
        </form>
      </div>

      <div className="flex-1 flex flex-col gap-5 min-w-[25rem]">
        <div className="flex gap-2 justify-between items-center border-b border-zinc-300">
          <h1 className="text-2xl pb-1 ">Comments</h1>
          <button className="px-2 py-1 rounded-md bg-red-500 text-white text-sm font-medium">
            Delete all
          </button>
        </div>
        <div className="h-full flex flex-col gap-3">
          <div className="min-h-[21.9rem] max-h-[25rem] flex flex-col gap-3 overflow-y-auto ">
            {commentsList.length > 0 ? (
              commentsList.map((item, index) => {
                return (
                  <div key={index} className="flex items-end gap-1">
                    <div className="w-10/12 p-3 rounded-xl bg-[#FFD0D0] shadow-md">
                      {item.text}
                    </div>
                    <div className="">
                      <button onClick={() => deleteSpecificComment(item._id)}>
                        <DeleteIcon className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>
                <p className="text-center text-xl text-black-1">
                  No comments yet
                </p>
              </div>
            )}
          </div>
          <div className="">
            <textarea
              className="w-full text-[15px] focus:outline-2 focus:outline-offset-1 focus:outline-blue-600 focus:bg-blue-50  border border-zinc-400 bg-zinc-100 rounded-md px-2 py-1 placeholder:text-black-1"
              placeholder="Write your comment here..."
              cols={30}
              rows={4}
              value={newComment}
              onChange={handleChangeComment}
            ></textarea>
            <div className="flex gap-2 items-center">
              <button
                onClick={handleSubmitComment}
                disabled={loadingComment || newComment === ""}
                className="py-1 px-3 rounded-md text-white font-semibold bg-green-600 hover:bg-green-500 disabled:bg-gray-500"
              >
                {loadingComment ? "Sending..." : "Add Comment"}
              </button>
              <span>
                {errorComment && (
                  <p className="text-red-500 text-sm">{errorComment}</p>
                )}
              </span>
            </div>
            <div className="py-2 text-[14px] text-gray-700">
              <p>Changes here will be immediately reflected on the student's</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex-col gap-5">
        <div className="max-w-[45rem] flex flex-col gap-3 rounded-2xl border border-zinc-300 p-5">
          <h3 className="capitalize text-gray-400 text-sm">
            Student's personal information
          </h3>

          <div className="flex flex-col transition-all ease-linear">
            {dataFields.map((item) => {
              return (
                <div
                  key={item.id}
                  className="borde hover:bg-blue-100 border-gray-300 hover:scale-[1.04] hover:px-2 py-3 hover:rounded-t-md transition-all ease-linear flex gap-3"
                >
                  <p className="flex-1 text-gray-600"> {item.name} </p>
                  {isEdit ? (
                    item.ref2 ? (
                      <div className="flex-1 flex gap-3">
                        <input
                          type={item.type}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                          defaultValue={form[item.ref]}
                          onChange={(e) =>
                            setForm({ ...form, [item.ref]: e.target.value })
                          }
                        />
                        <input
                          type={item.type}
                          className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                          defaultValue={form[item.ref2]}
                          onChange={(e) =>
                            setForm({ ...form, [item.ref2]: e.target.value })
                          }
                        />
                      </div>
                    ) : item.options ? (
                      <select
                        className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                        defaultValue={form[item.ref]}
                        onChange={(e) =>
                          setForm({ ...form, [item.ref]: e.target.value })
                        }
                      >
                        {item.options.map((option, index) => {
                          return (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          );
                        })}
                      </select>
                    ) : (
                      <input
                        type={item.type}
                        className="flex-1 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-zinc-300"
                        defaultValue={form[item.ref]}
                        onChange={(e) =>
                          setForm({ ...form, [item.ref]: e.target.value })
                        }
                      />
                    )
                  ) : (
                    <p className="flex-1"> {item.value} </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
}
