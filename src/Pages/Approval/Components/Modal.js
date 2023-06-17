import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DeleteIcon } from "../../../Components/Icons";
import { getStudentById, updateApprovedStatus } from "../../../Utils/Api/Api";
import Loader from "../../../Components/Loader";

export default function Modal({ id, modal, handleModal }) {
  const sections = [
    {
      title: "Personal Details",
      fields: ["firstName", "lastName", "dob", "gender"],
      key: ["First Name", "Last Name", "DoB", "Gender"],
    },
    {
      title: "Address Details",
      fields: [
        "addressDetail.addressStreet",
        "addressDetail.suburb",
        "addressDetail.postCode",
      ],
      key: ["Address Street", "Suburb", "PostCode"],
    },
    {
      title: "Acadamic Details",
      fields: [
        "tutoringDetail.subjects",
        "tutoringDetail.frequency",
        "tutoringDetail.days",
        "tutoringDetail.paymentMethod",
      ],
      key: ["Subjects", "Frequency", "Preferred Days", "Payment Method"],
    },
    {
      title: "Health Details",
      fields: [
        "healthDetail.allergicFood",
        "healthDetail.medications",
        "healthDetail.allergicMedication",
        "healthDetail.healthProblem",
      ],
      key: [
        "Allergic Food",
        "Medications",
        "Allergic Medication",
        "Health Problem",
      ],
    },
  ];
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const renderValue = (value) => {
    if (typeof value === "object") {
      if (Array.isArray(value)) {
        return value.join(", ");
      } else {
        return Object.values(value).join(", ");
      }
    } else {
      return value;
    }
  };

  const closeModal = () => {
    if (window.confirm("Are you sure you want to close this modal?")) {
      handleModal(false);
      setData({});
    }
  };

  //? Chaning Approval Status
  const handleApprovalStatusChange = async (approvalStatus) => {
    try {
      const message = await updateApprovedStatus(id, approvalStatus);
      console.log(message);
      setStatus(true);
      handleModal();
    } catch (error) {
      console.log(error);
      setStatus(false);
    }
  };

  //?  Fetching current ID's Data
  const getData = async () => {
    setLoading(true);
    try {
      const data = await getStudentById(id);
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

  if (!loading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed  inset-0 bg-black bg-opacity-50 backdrop-blur-[2px] flex flex-col gap-3 justify-center items-center z-30"
      >
        <div className="flex flex-col gap-5 w-[95vw] max-h-[95vh]">
          <div className=" bg-white-og bg-opacity-80 rounded-xl flex flex-col overflow-hidden">
            <div className="p-5 overflow-hidden">
              <div className="flex gap-10 justify-between items-center">
                <h1 className="text-2xl font-bold">Approve Student</h1>
                <button className="p-1 rounded-full hover:bg-red-300 transition-all ease-in-out">
                  <DeleteIcon className="w-6 h-6 " />
                </button>
              </div>

              {/* //? Content */}
              <div className="w-full h-full flex gap-4">
                <div className="flex-1 flex flex-col gap-5 py-3 h-full overflow-y-auto">
                  {sections.map((section, index) => (
                    <div key={index}>
                      <h2 className="text-lg text-blue-600">{section.title}</h2>

                      <div className="border-b border-gray-300 py-2">
                        {section.fields.map((field, fieldIndex) => {
                          const value = field
                            .split(".")
                            .reduce((obj, key) => (obj ? obj[key] : ""), data);

                          const key = section.key[fieldIndex];

                          return (
                            <div key={fieldIndex} className="flex gap-2">
                              <div className="flex-1 font-medium">
                                {/* {field.split(".").pop()}:{" "} */}
                                {key}
                              </div>
                              <div className="flex-1">{renderValue(value)}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <h2 className="text-lg text-blue-600">Time Slots</h2>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="flex-1 font-medium">Preferred Days</h3>
                      <div className="flex gap-2">
                        {data &&
                          data.tutoringDetail?.days.map((day, index) => {
                            return (
                              <div
                                key={index}
                                className="px-2 py-1 text-sm rounded-md shadow-xl bg-white"
                              >
                                {day}
                              </div>
                            );
                          })}
                      </div>
                    </div>

                    <div>
                      <h3 className="flex-1 font-medium">
                        Allot Time
                        <span className="text-sm text-gray-500">/Day</span>
                      </h3>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-300"></div>
            <div className="">
              <button
                onClick={() => handleApprovalStatusChange(true)}
                className="p-3 w-full hover:bg-white transition-all ease-in-out outline-none text-green-500 text-xl"
              >
                Approve
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
  } else {
    <Loader />;
  }
}
