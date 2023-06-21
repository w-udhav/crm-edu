import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "./Components/About";
import Parents from "./Components/Parents";
import Medical from "./Components/Medical";
import Address from "./Components/Address";
import {
  AboutIcon,
  AddressIcon,
  EditIcon,
  MedicalIcon,
  ParentsIcon,
  UserIcon,
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
      icon: <AddressIcon className="w-5 h-5" />,
    },
    {
      id: 3,
      name: "Parents",
      component: "/parents",
      icon: <ParentsIcon className="w-5 h-5" />,
    },

    {
      id: 4,
      name: "Medical",
      component: "/medical",
      icon: <MedicalIcon className="w-5 h-5" />,
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
        className="w-full h-full"
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
        <div className="">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <UserIcon className="w-12 h-12" />
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-black-1">
                    {studentData.firstName} {studentData.lastName}
                  </h3>
                  <div
                    className={`w-2 h-2 rounded-full
                    ${studentData.status === "Active" && "bg-green-500"}
                    ${studentData.status === "Inactive" && "bg-red-500"}
                    ${studentData.status === "Pending" && "bg-yellow-500"}
                  `}
                  ></div>
                </div>
                <p className="text-sm">Student</p>
              </div>
            </div>

            <div>
              <button
                onClick={handleEdit}
                className={`${!isEdit && "hover:bg-blue-200"}  
                transition-all ease-in-out rounded-md px-2 py-1 flex items-center gap-1 text-sm border border-zinc-500
                `}
              >
                <EditIcon className="w-4 h-4" />
                <span>Edit</span>
              </button>
            </div>
          </div>
        </div>

        {
          // ! This is the main content
        }
        <div className="w-full h-full flex flex-row gap-8 overflow-y-auto">
          <div className="min-w-[max-content] w-[12rem] pl-2">
            <div className=" flex flex-col gap-">
              {links.map((item) => {
                return (
                  <button
                    onClick={() => setActive(item.id)}
                    key={item.id}
                    className={`relative flex gap-5 items-center justify-between rounded-md outline-none px-2 text-[15px] 
                    ${
                      active === item.id
                        ? "bg-[#C4DFDF] bg-opacity-30  font-medium"
                        : "hover:bg-[#ECF9FF] "
                    }`}
                  >
                    <div className="flex py-[6px] gap-2 items-center text-black-1">
                      <div className="w-5 flex items-center justify-center rounded-full">
                        {item.icon}
                      </div>
                      <p>{item.name}</p>
                    </div>
                    {active === item.id && (
                      <div className="absolute top-0 -left-[7px] h-full w-1 py-[3px]">
                        <div className="bg-sky-500 rounded-2xl h-full w-full"></div>
                      </div>
                    )}
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
