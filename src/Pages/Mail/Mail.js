import React, { useState } from "react";
import MailList from "./Components/MailList";
import { AnimatePresence, motion } from "framer-motion";

export default function Mail() {
  const [toMail, setToMail] = useState([]);
  const [data, setData] = useState({
    subject: "",
    body: "",
  });
  const [showModal, setShowModal] = useState(false);

  //? handle modal
  const handleModal = (res) => {
    setShowModal(res);
  };

  //? handle clear
  const handleClear = () => {
    if (toMail.length > 0) setToMail([]);
    setData({ subject: "", body: "" });
    handleModal(false);
  };

  //? handle change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className=" h-full flex flex-col gap-5"
    >
      <div className="relative rounded-xl overflow-hidden border shadow-md">
        {/* Head */}
        <div className="p-3 flex justify-between items-center bg-gray-300 rounded-t-xl">
          <h1>New Message</h1>
          <button
            onClick={() => handleModal(true)}
            className="px-3 py-1 bg-white-og rounded-full hover:shadow-xl transition-all"
          >
            Clear
          </button>
        </div>

        {/* Email Details */}
        <div className="flex flex-col bg-white-og">
          {/* To */}
          <div className="border-b px-3 py-[6px] flex items-center gap-2 flex-wrap">
            <span>To:</span>

            {/* To mails */}
            <div className="flex gap-1">
              {
                // To mails
                toMail.map((mail, index) => (
                  <span
                    key={index}
                    className="border border-gray-300 px-2 py-1 rounded-full text-[13px]"
                  >
                    {mail}
                  </span>
                ))
              }
            </div>
          </div>

          {/* Subject */}
          <input
            type="text"
            name="subject"
            onChange={handleChange}
            value={data.subject}
            autoComplete="off"
            className="border-b outline-none px-3 py-[6px] text-[15px]"
            placeholder="Subject"
          />
        </div>

        {/* Body */}
        <div className="">
          <textarea
            cols="30"
            rows="8"
            placeholder="Body"
            name="body"
            value={data.body}
            onChange={handleChange}
            className="w-full outline-none p-3 text-[15px] -mb-1"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="p-3 border-t border-gray-300 ">
          <div>
            <button className="bg-blue-600 font-medium text-white px-6 py-2 rounded-full">
              Send
            </button>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full bg-black bg-opacity-40 flex justify-center items-center absolute top-0 left-0 backdrop-blur-[2px]"
            >
              <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: -500 }}
                transition={{
                  y: { type: "spring", stiffness: 1000, damping: 100 },
                  duration: 0.2,
                }}
                className=" w-[20rem] overflow-hidden text-center flex flex-col gap-2"
              >
                <div className="bg-white-og bg-opacity-80 rounded-xl shadow-md">
                  <div className="border-b border-gray-300 p-3">
                    <h1 className="text-[15px] font-semibold text-gray-500">
                      You cannot undo this action
                    </h1>
                  </div>
                  <button
                    onClick={handleClear}
                    className="p-3 w-full outline-none text-red-500 text-xl"
                  >
                    Delete all content?
                  </button>
                </div>
                <div className="bg-white-og bg-opacity-90 rounded-xl shadow-md">
                  <button
                    onClick={() => handleModal(false)}
                    className="p-3 w-full text-xl text-blue-600 font-medium outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mail Listing */}
      <MailList toMail={toMail} setToMail={setToMail} />
    </motion.div>
  );
}
