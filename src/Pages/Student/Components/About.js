import React, { useState } from "react";
import SubjectCard from "../../../Components/SubjectCard";

export default function About({ isEdit, data }) {
  const [subjects, setSubjects] = useState(
    data.tutoringDetail.subjects ? data.tutoringDetail.subjects : false
  );

  const [form, setForm] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    dob: data.dob,
    gender: data.gender,
    schoolName: data.schoolName,
    schoolYear: data.schoolYear,
  });

  const dataFields = [
    {
      id: 1,
      name: "Full Name",
      value: data.firstName + " " + data.lastName,
      ref: "firstName",
      ref2: "lastName",
      type: "text",
    },
    {
      id: 2,
      name: "Email",
      value: data.email,
      ref: "email", // ? Ref is used to identify the input field
      type: "email",
    },
    {
      id: 3,
      name: "Date of Birth",
      value: data.dob,
      ref: "dob",
      type: "date",
    },
    {
      id: 4,
      name: "Gender",
      value: data.gender,
      ref: "gender",
      type: "text",
      options: ["Male", "Female", "Other"],
    },
    {
      id: 5,
      name: "School Name",
      value: data.schoolName,
      ref: "schoolName",
      type: "text",
    },
    {
      id: 6,
      name: "School Year",
      value: data.schoolYear,
      ref: "schoolYear",
      type: "number",
    },
  ];

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col xxl:flex-row gap-5">
        <div className="flex-1 flex flex-col gap-3">
          <h1 className="text-xl font-medium">Academic</h1>
          {subjects ? (
            <div className="flex flex-col lg:flex-row flex-wrap gap-5">
              <div className="flex-1 flex flex-col gap-3">
                {subjects.map((item, index) => {
                  return (
                    <SubjectCard
                      key={index}
                      data={data.tutoringDetail.subjects[index]}
                    />
                  );
                })}
              </div>

              <div className="flex-1 flex flex-col gap-3 rounded-2xl shadow-md p-5">
                <div className="flex justify-between items-start">
                  <h3 className="capitalize text-gray-400 text-sm">
                    Frequency
                  </h3>
                  <h3 className="capitalize bg-gray-700 rounded-md text-white px-2 py-1 text-[12px]">
                    {data.tutoringDetail.frequency}/week
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex">
                    <p className="flex-1 text-gray-600">Monday</p>
                    <p className="flex-1 text-gray-600">03:00PM</p>
                  </div>
                  <div className="flex">
                    <p className="flex-1 text-gray-600">Tuesday</p>
                    <p className="flex-1 text-gray-600">12:00PM</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap gap-10">
              <p className="text-gray-500">No subjects</p>
            </div>
          )}
        </div>

        {/* payment */}
        <div className="flex-1 border">
          <h1 className="text-xl font-medium">Chart</h1>
        </div>
      </div>

      <div className="flex-col gap-5">
        <div className="max-w-[45rem] flex flex-col gap-3 rounded-2xl border border-zinc-300 p-5">
          <h3 className="capitalize text-gray-400 text-sm">
            Student's personal information
          </h3>

          {/* Content container */}
          <div className="flex flex-col transition-all ease-linear">
            {dataFields.map((item) => {
              return (
                <div
                  key={item.id}
                  className="border-b hover:bg-gray-100 border-gray-300 hover:px-3 py-5 hover:rounded-t-md transition-all ease-linear flex gap-3"
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
      </div>
    </div>
  );
}
