import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./Components/About";
import Parents from "./Components/Parents";
import Medical from "./Components/Medical";
import Address from "./Components/Address";
import user from "../../Assets/User/user.jpg";
import {
  AboutIcon,
  AddressIcon,
  EditIcon,
  LeftArrowHead,
  MedicalIcon,
  ParentsIcon,
} from "../../Components/Icons";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../Utils/Api/Api";
import Loader from "../../Components/Loader";

export default function Student() {
  const [isEdit, setIsEdit] = useState(false);
  const [active, setActive] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // ? Data segregration
  const [studentData, setStudentData] = useState({});

  const params = useParams();
  const links = [
    {
      id: 1,
      name: "About",
      component: "/",
      icon: <AboutIcon className="" />,
    },
    {
      id: 2,
      name: "Address",
      component: "/address",
      icon: <AddressIcon className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Parents",
      component: "/parents",
      icon: <ParentsIcon className="w-6 h-6" />,
    },

    {
      id: 4,
      name: "Medical",
      component: "/medical",
      icon: <MedicalIcon className="w-6 h-6" />,
    },
  ];

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    getStudentById(params.id)
      .then((data) => {
        setStudentData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (error) return <div>Something went wrong</div>;

  if (loading)
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
        className="w-full h-full border"
      >
        <Loader />
      </motion.div>
    );

  if (studentData)
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
        className="flex flex-col gap-5 h-full overflow-hidden"
      >
        <div className="bg-zinc-200 py-8 rounded-t-3xl">
          {/* Header */}
          <div className="flex justify-between items-center px-8">
            <div className="flex gap-5 items-center">
              <div className="w-20 h-20 rounded-full">
                <img src={user} className="rounded-full object-cover" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl">
                  {studentData.firstName} {studentData.lastName}
                </h3>
                <p className="text-sm">Student</p>
              </div>
            </div>

            <div>
              <button
                onClick={handleEdit}
                className={`${
                  !isEdit && "hover:bg-blue-200"
                }  transition-all ease-in-out rounded-full p-2`}
              >
                {isEdit ? (
                  <span className="bg-red-500 hover:bg-red-600 transition-all ease-linear text-white rounded-md px-4 py-2">
                    Cancel
                  </span>
                ) : (
                  <EditIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {
          // ! This is the main content
        }
        <div className="w-full h-full flex flex-row gap-8 overflow-y-auto">
          <div className=" pr  min-w-[max-content]">
            <div className=" flex flex-col gap-5">
              {links.map((item) => {
                return (
                  <button
                    onClick={() => setActive(item.id)}
                    key={item.id}
                    className={`flex gap-5 items-center justify-between rounded-full outline-none px-3 transition-all ease-in-out
                    ${
                      active === item.id
                        ? "bg-p1 bg-opacity-70 border border-p1"
                        : "hover:bg-p1 hover:bg-opacity-20"
                    }`}
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        {item.icon}
                      </div>
                      <p>{item.name}</p>
                    </div>
                    <div className="text-black-1">
                      <LeftArrowHead className="rotate-180" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          {/* Main */}
          <div className="overflow-y-auto rounded-xl w-full h-full scrollbar-hide">
            <div className="rounded-2xl flex flex-col gap-12">
              {active === 1 && <About data={studentData} isEdit={isEdit} />}
              {active === 2 && (
                <Address data={studentData.addressDetail} isEdit={isEdit} />
              )}
              {active === 3 && (
                <Parents data={studentData.parentDetail[0]} isEdit={isEdit} />
              )}
              {active === 4 && (
                <Medical data={studentData.healthDetail} isEdit={isEdit} />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );

  return <p> No data available... </p>;
}
