import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Table from "../../Components/Table";
import { getMiscData, getStudents } from "../../Utils/Api/Api";
import { motion } from "framer-motion";
import WeekChart from "./Components/WeekChart";
import Loader from "../../Components/Loader";

export default function Dashboard() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //? Data from API   {
  //!     "_id": "646b062195c8ade227e4222d",
  //!     "firstName": "Ujjwal",
  //!     "email": "ujjwal@gmail.com",
  //!     "phone": 9559971272,
  //!     "tutoringDetail": {
  //!         "subjects": [
  //!             "Maths",
  //!             "Science"
  //!         ]
  //!     },
  //!     "status": "Inactive"
  //! }

  const [miscData, setMiscData] = useState({});

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const miscData = await getMiscData();
      setMiscData(miscData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full h-full flex flex-col gap-5 overflow-y-auto overflow-x-hidden"
    >
      {/* Section 1 - Display */}
      <div className="max-h-[min-content] flex flex-col xl:flex-row gap-5">
        {/* Section 1.1 - Display - Left */}
        <div className="flex-1 flex flex-col rounded-3xl p-3 shadow-md shadow-[#b8b8d470] bg-paleLavender">
          <h1 className="text-4xl font-semibold  "> Chart Overview </h1>
          <div className="h-full min-h-[20rem]">
            {loading ? (
              <Loader />
            ) : Object.keys(miscData).length > 0 ? (
              <WeekChart data={miscData.dayWiseCount} />
            ) : error ? (
              <div className="w-full h-full flex items-center justify-center">
                <p className="px-2 py-1 rounded-md bg-red-100 text-red-500 shadow">
                  {error ? error : "No data available!"}
                </p>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="px-2 py-1 rounded-md bg-yellow-100 text-yellow-500 shadow">
                  "No data available!"
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="w-[max-content] flex flex-col gap-2">
          <div>
            <h3 className="text-3xl font-semibold">Overview</h3>
          </div>
          {miscData ? (
            loading ? (
              <Loader />
            ) : (
              <Cards data={miscData} />
            )
          ) : (
            <div>No data available!</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
