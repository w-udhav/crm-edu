import React, { useEffect, useState } from "react";
import { getStudents } from "../../../Utils/Api/Api";
import Loader from "../../../Components/Loader";

export default function MailList({ toMail, setToMail }) {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState([]);

  //? handle email selection
  const handleEmailSelection = (e, email) => {
    const index = toMail.indexOf(email);
    if (index > -1) {
      const arr = [...toMail];
      arr.splice(index, 1);
      setToMail(arr);
    } else {
      setToMail([...toMail, email]);
    }

    setSelectedEmails((prev) => {
      // * creating a copy of the previous state
      const updatedSelection = { ...prev };

      // * if the email is already selected, then remove it from the list
      if (updatedSelection[email]) {
        delete updatedSelection[email];
      }
      // * else add it to the list
      else {
        updatedSelection[email] = true;
      }

      return updatedSelection;
    });
  };

  //? handle select all
  const handleSelectAll = (e) => {
    if (selectAll) {
      setSelectedEmails({});
      setToMail([]);
    } else {
      const allEmails = data.map((item) => item.email);
      const selectedEmails = allEmails.reduce((acc, email) => {
        acc[email] = true;
        return acc;
      }, {});
      setSelectedEmails(selectedEmails);
      let arr = [];
      for (var key in selectedEmails) {
        arr.push(key);
      }
      setToMail(arr);
    }
    setSelectAll(!selectAll);
  };

  //? fetch data
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      setData([]);
      const data = await getStudents();
      setData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const headings = ["Name", "Student's Email", "Parent's Email", "Status"];

  return (
    <div className="border rounded-xl">
      <div className="overflow-x-auto rounded-xl ">
        <table className="w-full text-left rounded-xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">
                <div className="relative flex justify-center items-center">
                  <input
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    className="z-10 cursor-pointer w-4 h-4"
                    onChange={handleSelectAll}
                    checked={selectAll}
                  />
                  {/* <div className="bg-blue-100 absolute w-6 h-6 p-4 z-0 rounded-full"></div> */}
                </div>
              </th>
              {headings.map((head, index) => (
                <th key={index} className="p-2">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={5}>
                  <Loader />
                </td>
              </tr>
            ) : (
              data.map((row, index) => (
                <tr
                  key={row._id}
                  className="hover:bg-blue-50 transition-all ease-in-out"
                >
                  <td className="w-1 py-1 px-4">
                    <input
                      type="checkbox"
                      name="selectAll"
                      id="selectAll"
                      className="w-4 h-4 cursor-pointer"
                      value={row.email}
                      checked={!!selectedEmails[row.email]}
                      onChange={(e) => handleEmailSelection(e, row.email)}
                    />
                  </td>
                  <td className="px-2 py-1">{row.firstName}</td>
                  <td className="px-2 py-1">{row.email}</td>
                  <td className="px-2 py-1">
                    {row.parentEmail ? row.parentEmail : "NA"}
                  </td>
                  <td className="px-2 py-1">
                    {row.status === "Active" && (
                      <span className="text-green-500 rounded-full">
                        {row.status}
                      </span>
                    )}
                    {row.status === "Inactive" && (
                      <span className="text-red-500 rounded-full">
                        {row.status}
                      </span>
                    )}
                    {row.status === "Pending" && (
                      <span className="text-yellow-500 rounded-full">
                        {row.status}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
