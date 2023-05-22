import React, { useState } from "react";
import { data } from "./data";
import Number from "./Components/Number";

export default function Enrol() {
  const [formData, setFormData] = useState({

  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = {};
    data.forEach((section) => {
      section.questions.forEach((question) => {
        if (!formData[question.name]) {
          validation[question.name] = "This field is required";
        }
      });
    });
    setError(validation);
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F3EE] flex flex-col items-center">
      {/* Navigation */}
      <div className="bg-white-og w-full z-10 py-2 px-4 shadow-sm border-b border-zinc-200 fixed">
        <div className="flex justify-between items-baseline">
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-black-1 gap-10"
        >
          {data.map((section, index) => {
            return (
              <div key={section.id}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="">
                    {" "}
                    <Number number={index + 1} />{" "}
                  </div>
                  <h1 className="text-2xl ">{section.name}</h1>
                </div>
                <div className="flex flex-col gap-4 ">
                  {section.questions.map((item) => {
                    return (
                      <div
                        key={item.id}
                        style={{
                          borderColor: error[item.name] && "red",
                        }}
                        className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-7"
                      >
                        <p>{item.name}</p>
                        <input
                          type={item.type}
                          name={item.key}
                          value={formData[item.name]}
                          onChange={handleChange}
                          className="border-b outline-none focus:border-black-1 text-black"
                          placeholder={item.placeholder}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex justify-between items-center">
            <button className="py-2 rounded-md transition-all text-red-500">
              Clear
            </button>

            <button className="px-5 py-2 text-white  bg-blue-600 transition-all ease-linear rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// {
//   {
//     text: (
//       <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
//         <p>{item.name}</p>
//         <input
//           type="text"
//           name="fname"
//           id=""
//           className="border-b outline-none focus:border-black-1 text-black"
//           placeholder="Short answer"
//         />
//       </div>
//     ),
//     radio: (
//       <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
//         <p>{item.question}</p>
//         <div className="flex flex-col gap-2">
//           {item.options.map((option, index) => {
//             return (
//               <div className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="fname"
//                   id=""
//                   className="border-b outline-none focus:border-black-1 text-black"
//                   placeholder="Short answer"
//                 />
//                 <label htmlFor="">{option}</label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     ),
//     checkbox: (
//       <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
//         <p>{item.question}</p>
//         <div className="flex flex-col gap-2">
//           {item.options.map((option, index) => {
//             return (
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   name="fname"
//                   id=""
//                   className="border-b outline-none focus:border-black-1 text-black"
//                   placeholder="Short answer"
//                 />
//                 <label htmlFor="">{option}</label>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     ),
//     date: (
//       <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
//         <p>{item.question}</p>
//         <input
//           type="date"
//           name="fname"
//           id=""
//           className="border-b outline-none focus:border-black-1 text-black"
//           placeholder="Short answer"
//         />
//       </div>
//     ),
//     textarea: (
//       <div className="rounded-lg bg-white-og border shadow-md p-5 flex flex-col gap-6">
//         <p>{item.question}</p>
//         <textarea
//           name=""
//           id=""
//           cols="30"
//           rows="10"
//           className="border-b outline-none focus:border-black-1 text-black"
//           placeholder="Short answer"
//         ></textarea>
//       </div>
//     ),
//   }[item.type]
// }
