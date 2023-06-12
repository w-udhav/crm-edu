import React, { useState } from "react";
import { data } from "./data";
import Number from "./Components/Number";
import { sendForm } from "../../Utils/Api/Api";
import Loader from "../../Components/Loader";
import { useNavigate } from "react-router-dom";
import Success from "../../Components/Success";

export default function Enrol({ user }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    // * Student
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    schoolName: "",
    schoolYear: "",
    email: "",
    phone: "",

    // * Address
    addressStreet: "",
    suburb: "",
    postCode: "",
    parentsEmail: "",

    // * Parent
    //! Parent 1
    parentName: "",
    relation: "",
    parentPhone: "",

    // * Health
    allergicFood: "",
    medications: "",
    allergicMedication: "",
    healthProblem: "",

    // * Subjects
    subjects: [],
    frequency: 0,
    preferredDays: [],
    paymentMethod: "",

    // * Terms
    terms: false,
  });

  const navigate = useNavigate();

  // ? Handle the Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ? Handle the Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = {};
    console.log(formData);
    data.forEach((section) => {
      section.questions.forEach((question) => {
        // * Check if the field is required

        if (!formData[question.key] && question.required) {
          validation[question.key] = "This field is required";
        }
      });
    });
    setError(validation);
    console.log("error" + error);

    setLoading(true);

    try {
      sendForm(formData).then((res) => {
        console.log(res);
      });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        if (user) {
          navigate("/dashboard");
        } else {
          navigate("auth/login");
        }
      }, 2000);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  // ? Clear the form
  const handleClear = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure, you want to clear the form?")) {
      setFormData({
        // * Student
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        schoolName: "",
        schoolYear: "",
        email: "",
        phone: "",

        // * Address
        addressStreet: "",
        suburb: "",
        postCode: "",
        parentsEmail: "",

        // * Parent
        //! Parent 1
        parentName1: "",
        relation1: "",
        parentPhone1: "",
        //! Parent 2
        parentName2: "",
        relation2: "",
        parentPhone2: "",

        // * Health
        allergicFood: "",
        medications: "",
        allergicMedication: "",
        healthProblem: "",

        // * Subjects
        subjects: [],
        frequency: 0,
        preferredDays: [],
        paymentMethod: "",

        // * Terms
        terms: false,
      });
    }
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
                    if (
                      item.type === "text" ||
                      item.type === "number" ||
                      item.type === "email"
                    ) {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-7"
                        >
                          <div>{item.name}</div>
                          <input
                            type={item.type}
                            name={item.key}
                            value={formData[item.key]}
                            onChange={handleChange}
                            className="border-b outline-none focus:border-black-1 text-black"
                            placeholder={item.placeholder}
                            required={item.required}
                          />
                        </div>
                      );
                    }

                    //! Radio
                    if (item.type === "radio") {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-5"
                        >
                          <div>{item.name}</div>
                          <div className="flex flex-col gap-2">
                            {item.options.map((option, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2 w-full"
                                >
                                  <input
                                    type="radio"
                                    name={item.key}
                                    value={option}
                                    onChange={() => {
                                      if (item.key === "frequency") {
                                        setFormData((prev) => ({
                                          ...prev,
                                          [item.key]: index + 1,
                                        }));
                                        return;
                                      }
                                      setFormData((prev) => ({
                                        ...prev,
                                        [item.key]: option,
                                      }));
                                    }}
                                    className="border-b outline-none focus:border-black-1 text-black"
                                    required={item.required}
                                  />
                                  <label htmlFor="">{option}</label>
                                  {
                                    // * If the option is "Other", show the input
                                    option === "Other" && (
                                      <input
                                        type="text"
                                        name={item.key}
                                        value={formData[item.name]}
                                        onChange={handleChange}
                                        className="border-b w-full outline-none focus:border-black-1 text-black"
                                        placeholder={item.placeholder}
                                        required={item.required}
                                      />
                                    )
                                  }
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    if (item.type === "date") {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-6"
                        >
                          <div>{item.name}</div>
                          <input
                            type="date"
                            name={item.key}
                            value={formData[item.key]}
                            onChange={handleChange}
                            id=""
                            className="border-b outline-none focus:border-black-1 text-black"
                            placeholder="Short answer"
                          />
                        </div>
                      );
                    }

                    if (
                      item.type === "checkbox" &&
                      Array.isArray(item.options) &&
                      item.key !== "terms" &&
                      item.key !== "preferredDays"
                    ) {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-6"
                        >
                          <div>{item.name}</div>
                          <div className="flex flex-col gap-2">
                            {item.options.map((option, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    name={item.key}
                                    id={option}
                                    value={option}
                                    onChange={() => {
                                      // setFormData();
                                      formData.subjects = [
                                        ...formData.subjects,
                                        option,
                                      ];
                                    }}
                                    className="border-b outline-none focus:border-black-1 text-black"
                                    placeholder="Short answer"
                                  />
                                  <label htmlFor={option}>{option}</label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    if (item.key === "preferredDays") {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-6"
                        >
                          <div>{item.name}</div>
                          <div className="flex flex-col gap-2">
                            {item.options.map((option, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    name={item.key}
                                    id={option}
                                    value={option}
                                    disabled={formData.frequency === 0}
                                    onChange={() => {
                                      formData.preferredDays = [
                                        ...formData.preferredDays,
                                        option,
                                      ];
                                    }}
                                    className="border-b outline-none focus:border-black-1 text-black"
                                    placeholder="Short answer"
                                  />
                                  <label htmlFor={option}>{option}</label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    if (item.key === "terms") {
                      return (
                        <div
                          key={item.id}
                          style={{
                            borderColor: error[item.key] && "red",
                          }}
                          className="rounded-lg bg-white-og border shadow-md p-7 flex flex-col gap-7"
                        >
                          <div>{item.name}</div>
                          <div className="flex gap-2">
                            <input
                              type={item.type}
                              name={item.key}
                              value={formData[item.key]}
                              onChange={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  [item.key]: !formData.terms,
                                }));
                              }}
                              className="border-b outline-none focus:border-black-1 text-black"
                              placeholder={item.placeholder}
                            />
                            <label htmlFor="">{item.options}</label>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </form>
      </div>
      <div className="sticky bottom-0 backdrop-blur-sm bg-white-og bg-opacity-80 shadow-md py-1 w-full flex justify-center">
        <div className="w-[45rem] p-1 flex justify-between items-center">
          <button
            onClick={handleClear}
            className="py-2 rounded-md transition-all text-red-500"
          >
            Clear
          </button>

          <button
            disabled={formData.terms ? false : true}
            onClick={handleSubmit}
            className="px-5 py-2 text-white  bg-blue-600 disabled:bg-gray-500 transition-all ease-linear rounded-md"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Loader */}
      {(loading || success) && (
        <div className="fixed bg-black bg-opacity-80 w-full h-full top-0 left-0">
          {loading && <Loader />}
          {success && <Success />}
        </div>
      )}
    </div>
  );
}
