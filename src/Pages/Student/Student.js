import React, { useState } from "react";
import About from "./Components/About";
import Parents from "./Components/Parents";
import Subjects from "./Components/Subjects";
import Medical from "./Components/Medical";
import Address from "./Components/Address";
import {
  AboutIcon,
  AddressIcon,
  BooksIcon,
  EditIcon,
  ParentsIcon,
} from "../../Components/Icons";

export default function Student() {
  const [isEdit, setIsEdit] = useState(false);
  const [active, setActive] = useState(1);

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
      name: "Subjects",
      component: "/subjects",
      icon: <BooksIcon className="w-6 h-6" />,
    },
    {
      id: 5,
      name: "Medical",
      component: "/medical",
      // icon: <MedicalIcon />
    },
  ];

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex gap-3 h-full">
      <div className="sticky mt-40 min-w-[max-content]">
        <div className="px-5 py-5 flex flex-col gap-5">
          {links.map((item) => {
            return (
              <button
                onClick={() => setActive(item.id)}
                key={item.id}
                className="flex gap-5 items-center justify-between outline-none"
              >
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <p>{item.name}</p>
                </div>
                <div>{">"}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-5">
        <div className="bg-zinc-200 py-8 rounded-t-3xl">
          {/* Header */}
          <div className="flex justify-between items-center px-8">
            <div className="flex gap-5 items-center">
              <div className="w-20 h-20 bg-zinc-400 rounded-full"></div>
              <div className="flex flex-col">
                <h3 className="text-3xl">John Doe</h3>
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
        {/* Main */}
        <div className="overflow-y-auto rounded-xl h-full scrollbar-hide">
          <div className="rounded-2xl flex flex-col gap-12">
            {active === 1 && <About isEdit={isEdit} />}
            {active === 2 && <Address isEdit={isEdit} />}
            {active === 3 && <Parents isEdit={isEdit} />}
            {active === 4 && <Subjects isEdit={isEdit} />}
            {active === 5 && <Medical isEdit={isEdit} />}
          </div>
        </div>
      </div>
    </div>
  );
}
