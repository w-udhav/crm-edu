import React, { useState } from "react";
import { motion } from "framer-motion";
import { DeleteIcon } from "./Icons";
import { addComment, removeComment } from "../Utils/Api/Api";

export default function CommentBox({ data, handleModal }) {
  const { id, comments } = data;

  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setNewComment(e.target.value);
  };

  const closeModal = () => {
    if (newComment.trimEnd().trimStart() === "") {
      handleModal(false);
      return;
    }
    if (window.confirm("Are you sure you want to close this modal?")) {
      handleModal(false);
    }
  };

  const deleteSpecificComment = async (commentId) => {
    try {
      const responseData = await removeComment(id, commentId);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const responseData = await addComment(id, newComment);
      console.log(responseData);
      setNewComment("");
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed z-30 inset-0 bg-black bg-opacity-50 backdrop-blur-[2px] flex flex-col gap-3 justify-center items-center"
    >
      <div className="flex flex-col gap-5 max-w-[35rem] w-[30rem] max-h-[80vh]">
        <div className=" bg-white-og bg-opacity-80 rounded-xl flex flex-col overflow-hidden">
          <div className="p-5 overflow-hidden">
            <div className="flex gap-10 justify-between items-start">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Comment</h1>
                <p className="text-sm text-black-1">student name</p>
              </div>
              <button className="px-2 py-1 rounded-md bg-red-500 text-white text-sm font-medium transition-all ease-in-out">
                Delete
              </button>
            </div>

            {/* //? Content */}
            <div className="h-full flex flex-col gap-2 py-3">
              <div className="h-full flex flex-col gap-3 overflow-y-auto ">
                {comments && comments.length > 0 ? (
                  comments.map((item) => (
                    <div key={item._id} className="flex items-end gap-1">
                      <div className="w-10/12 p-2 rounded-xl bg-[#CFD0D0] shadow-inner">
                        {item.text}
                      </div>
                      <div className="">
                        <button onClick={() => deleteSpecificComment(item._id)}>
                          <DeleteIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>
                    <p className="text-center text-xl text-black-1">
                      No comments yet
                    </p>
                  </div>
                )}
              </div>

              <div className="pb-5">
                <textarea
                  className="w-full p-2 rounded-xl bg-[#D8D8D8] outline-none text-black placeholder:text-black-1"
                  placeholder="Write your comment here..."
                  cols={30}
                  rows={4}
                  value={newComment}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 flex flex-col gap-3"></div>
          <div className="">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="p-3 w-full hover:bg-white transition-all ease-in-out outline-none text-green-500 text-xl"
            >
              {loading ? "Loading..." : "Add Comment"}
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl">
          <button
            className="p-3 w-full text-xl text-blue-600 font-medium outline-none"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
}
