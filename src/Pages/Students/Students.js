import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Table from "../../Components/Table";
import { getStudents } from "../../Utils/Api/Api";
import { ReloadIcon } from "../../Components/Icons";

export default function Students() {
  const headings = ["Name", "Email", "Phone", "Subject", "Status", "Action"];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      setData([]);
      const data = await getStudents({ approved: true });
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col gap-5 w-full h-full overflow-hidden relative"
    >
      <div className="overflow- flex flex-col gap-3">
        {/* Filter */}
        <div className="flex justify-between">
          <h3 className="text-xl ">Students</h3>
          <div className="flex gap-2 items-center ">
            <button onClick={fetchData} className="mt-1">
              <ReloadIcon />
            </button>
            <select
              name=""
              id=""
              className="border border-zinc-400 rounded-md bg-white outline-none"
            >
              <option value="">All</option>
              <option value="">Today</option>
              <option value="">Active</option>
              <option value="">Inactive</option>
            </select>
          </div>
        </div>

        {/* Table */}

        <Table
          headings={headings}
          data={data}
          loading={loading}
          error={error}
          fetchData={fetchData}
        />
      </div>
    </motion.div>
  );
}
