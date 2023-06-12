import React from "react";
import { motion } from "framer-motion";
import { DeleteIcon } from "./Icons";

export default function CommentBox({ data, handleModal }) {
  const closeModal = () => {
    if (window.confirm("Are you sure you want to close this modal?")) {
      handleModal(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed z-10 inset-0 bg-black bg-opacity-50 backdrop-blur-[2px] flex flex-col gap-3 justify-center items-center"
    >
      <div className="flex flex-col gap-5 max-w-[35rem] w-[35rem] max-h-[80vh]">
        <div className=" bg-white-og bg-opacity-80 rounded-xl flex flex-col overflow-hidden">
          <div className="p-5 overflow-hidden">
            <div className="flex gap-10 justify-between items-center">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Comment</h1>
                <p className="text-sm text-black-1">student name</p>
              </div>
              <button className="p-1 rounded-full hover:bg-red-300 transition-all ease-in-out">
                <DeleteIcon className="w-6 h-6 " />
              </button>
            </div>

            {/* //? Content */}
            <div className="h-full flex flex-col gap-2 py-3">
              <div className="h-full flex flex-col gap-3 overflow-y-auto ">
                {data
                  ? data.map((item) => (
                      <div className="w-full p-2 rounded-xl bg-[#CFD0D0]">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nisi ratione eum dolores accusantium nobis, maxime
                        labore ipsum distinctio quasi nesciunt, minima quos
                        mollitia cum itaque iure porro voluptates repellat
                        fugit!
                      </div>
                    ))
                  : 
                    <div>
                      <p className="text-center text-xl text-black-1">No comments yet</p>
                    </div>
                  }
              </div>

              <div className="pb-5">
                <textarea
                  className="w-full p-2 rounded-xl bg-[#D8D8D8] outline-none text-black placeholder:text-black-1"
                  placeholder="Write your comment here..."
                  cols={30}
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-300 flex flex-col gap-3"></div>
          <div className="">
            <button className="p-3 w-full hover:bg-white transition-all ease-in-out outline-none text-green-500 text-xl">
              Add Comment
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
