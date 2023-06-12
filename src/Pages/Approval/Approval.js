import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DeleteIcon, EditIcon, TickIcon } from "../../Components/Icons";
import { getStudents } from "../../Utils/Api/Api";
import Loader from "../../Components/Loader";
import Modal from "./Components/Modal";

export default function Approval() {
  const headings = ["Name", "Email", "Parent Email", "Phone No", "Actions"];
  const [data, setData] = useState(null);
  const [modal, setModal] = useState(false);
  const [currId, setCurrId] = useState(null); //? To store the id of the student to be deleted or edited
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (id) => {
    const newData = data.filter((d) => d._id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    setCurrId(id);
    handleModal();
  };

  //! Data fetching
  const getData = async () => {
    setLoading(true);
    try {
      const data = await getStudents();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="flex flex-col gap-5 w-full h-full overflow-hidden relative"
    >
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full text-left rounded-xl table-fixed ">
          <thead>
            <tr className="bg-gray-200">
              {headings.map((head, index) =>
                head === "Actions" ? (
                  <th key={index} className="p-2 w-1/6">
                    {head}
                  </th>
                ) : (
                  <th key={index} className="p-2 w-">
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {data ? (
              data.map((row) => (
                <tr key={row._id}>
                  <td className=" px-2 py-1">{row.firstName}</td>
                  <td className=" px-2 py-1">{row.email}</td>
                  <td className=" px-2 py-1">
                    {row.parentEmail ? row.parentEmail : "N/A"}
                  </td>
                  <td className=" px-2 py-1">{row.phone}</td>
                  <td className=" px-2 py-1">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(row._id)}
                        className="px-[6px] rounded-full hover:bg-blue-400 transition-all ease-in-out"
                      >
                        <EditIcon className="w-5 h-5" />
                      </button>
                      <button
                        onClick={handleDelete}
                        className="p-1 rounded-full hover:bg-red-400 transition-all ease-in-out"
                      >
                        <DeleteIcon className="w-6 h-6 " />
                      </button>
                      <button className="px-[6px] rounded-full hover:bg-green-400 transition-all ease-in-out">
                        <TickIcon className="w-5 h-5 " />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : error ? (
              <tr>
                <td colSpan="5" className="p-2">
                  {error}
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan="5" className="p-2">
                  <Loader />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modal && <Modal id={currId} handleModal={handleModal} />}
      </AnimatePresence>
    </motion.div>
  );
}