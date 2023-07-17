import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getMiscReviews, getReviews } from "../../Utils/Api/Api";
import { CustomerIcon, UserIcon } from "../../Components/Icons";

export default function Reviews() {
  const [data, setData] = useState([]);
  const [miscData, setMiscData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getReviews();
      const miscData = await getMiscReviews();
      setData(data);
      setMiscData(miscData);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      setData([]);
      setMiscData({});
      setLoading(false);
      setError(null);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-8 w-full h-full relative"
    >
      {/* Cards for information */}
      <div className="w-full flex gap-8">
        {/* Total Reviews */}
        <div className="p-8 w-[20rem] min-h-[10rem] rounded-lg shadow-md flex justify-center items-center bg-white-og text-charcoal">
          <div className="flex flex-col gap-4 w-full h-full">
            <h1 className="text-[18px] font-medium">Total Reivews</h1>
            <div className="flex flex-col gap-">
              <h2 className="text-4xl font-semibold">10.0k</h2>
              <p className="font-medium text-zinc-400 text-[15px]">
                Growth in reviews
              </p>
            </div>
          </div>
        </div>

        <div className="border-l border-zinc-200"></div>

        <div className="p-8 w-[20rem] min-h-[10rem] rounded-lg shadow-md flex justify-center items-center bg-white-og text-charcoal">
          <div className="flex flex-col gap-4 w-full h-full">
            <h1 className="text-[18px] font-medium">Average Reivews</h1>
            <div className="flex flex-col gap-">
              <h2 className="text-4xl font-semibold">4.0</h2>
              <p className="font-medium text-zinc-400 text-[15px]">
                Average rating of all reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-zinc-200"></div>

      {/* Listing */}
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <div className="flex gap-3">
            {/* User INfo */}
            <div className="flex gap-3 w-[25rem] border">
              <div className="w-16 h-16 rounded-md bg-slate-200 flex justify-center items-center">
                <div>
                  <CustomerIcon className="w-7 h-7" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold">Customer Name</h1>
                <p className="text-zinc-500 text-[15px]">
                  Posting as <span className="font-semibold">Customer</span>
                </p>
              </div>
            </div>

            {/* User Review */}
            <div className="border flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <div>No. of stars</div>
                  <p className="text-[15px] text-zinc-500">24-10-2023</p>
                </div>
                {/* Review */}
                <div>
                  <p className="text-zinc-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
