import React from "react";

export default function Enrol() {
  const data = [
    
    // Section-1
    {
      id:10,
      name: "Personal Details",
      fields: [
        {
          id: 1,
          name: "First Name",
          type: "text",
          placeholder: "Enter your first name",
          value: "",
        },
        {
          id: 2,
          name: "Last Name",
          type: "text",
          placeholder: "Enter your last name",
          value: "",
        },
        {
          id: 3,
          name: "Middle Name",
          type: "text",
          placeholder: "Enter your middle name",
          value: "",
        },
        {
          id: 4,
          name: "Date of Birth",
          type: "date",
          placeholder: "Enter your date of birth",
          value: "",
        },
        {
          id: 5,
          name: "School Name",
          type: "text",
          placeholder: "Enter your school name",
          value: "",
        },
        {
          id: 6,
          name: "Year",
          type: "text",
          placeholder: "Enter your year",
          value:""
        },
      ],      
    },
    {
      id:20,
      name: "Parent's Details",
    }
  ]


  return (
    <div className="min-h-screen w-full bg-[#F6F3EE] flex flex-col items-center">
      {/* Navigation */}
      <div className="bg-white-og w-full py-2 px-4 shadow-sm border-b border-zinc-200 fixed">
        <div className="flex justify-between">
          <div>Navigation</div>
          <div>
            <button className="px-2 py-1 text-[14px] text-black-1 border border-blue-300 bg-blue-200  hover:shadow-md rounded-md">
              Go back
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="w-[45rem] p-2 mt-14 flex flex-col gap-5">
        <div className="rounded-xl pt-12 pb-6 px-4 bg-paleBlue">
          <h1 className="font-bold text-4xl drop-shadow-xl flex flex-col gap-2">
            <span className="text-5xl">Enrolment Form</span>
          </h1>
        </div>

        <form className="flex flex-col text-black-1 gap-4">
          {/* Section-1 */}
          <div className="">
            <h1 className="text-2xl mb-3">Student's Information</h1>
            <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
              <p>First Name</p>
              <input
                type="text"
                name="fname"
                id=""
                className="border-b outline-none focus:border-black-1 text-black"
                placeholder="Short answer"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
