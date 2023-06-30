import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import { getAppointments, getMiscData } from "../../Utils/Api/Api";
import { AnimatePresence, motion } from "framer-motion";
import WeekChart from "./Components/WeekChart";
import Loader from "../../Components/Loader";
import CreateEvent from "./Components/CreateEvent";
import { ClockIcon } from "../../Components/Icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { formatISO } from "date-fns";

export default function Dashboard() {
  const [eventModal, setEventModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingEvent, setLoadingEvent] = useState(false);
  const [miscData, setMiscData] = useState({});
  const [appointments, setAppointments] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState("today");

  const handleEventModal = () => {
    setEventModal(!eventModal);
  };

  // const markDatesWithAppointments = (date) => {
  //   const formattedDate = date.toISOString().split("T")[0];

  //   const hasAppointments = appointments.some((appointment) => {
  //     const appointmentDate = formatISO(new Date(appointment.startTime), {
  //       representation: "date",
  //     });

  //     return appointmentDate === formattedDate;
  //   });

  //   return hasAppointments ? (
  //     <div className="relative flex items-center justify-center">
  //       <div className="bg-blue-500 bg-opacity-20 z-0 rounded-lg h-8 w-8 absolute -top-6"></div>
  //     </div>
  //   ) : null;
  // };
  const markDatesWithAppointments = (date) => {
    const formattedDate = date.toLocaleDateString("en-US");

    const hasAppointments = appointments.some((appointment) => {
      const appointmentDate = new Date(
        appointment.startTime
      ).toLocaleDateString("en-US");
      return appointmentDate === formattedDate;
    });

    return hasAppointments ? (
      <div className="relative flex items-center justify-center">
        <div className="bg-green-500 bg-opacity-30 z-0 rounded-lg h-8 w-8 absolute -top-6"></div>
      </div>
    ) : null;
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const miscData = await getMiscData();
      const appointmentData = await getAppointments(selectedEvent);
      setMiscData(miscData);
      setAppointments(appointmentData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    setLoadingEvent(true);
    setError(null);
    try {
      const appointmentData = await getAppointments(selectedEvent);
      setAppointments(appointmentData);
      setLoadingEvent(false);
    } catch (err) {
      setError(err.message);
      setLoadingEvent(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [selectedEvent]);

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
        <div className="w-[max-content] min-w-[25rem] flex flex-col gap-2">
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

      <div className="w-[50rem]">
        <div className="flex justify-between items-center gap-1">
          <h3 className="text-3xl font-semibold">Appointments</h3>
          <div className="flex items-center gap-2 ">
            <div>
              <select
                name=""
                id=""
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                className="text-[14px] border border-zinc-400 rounded-md bg-white outline-none"
              >
                <option value="today">Today</option>
                <option value="week">Week</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </div>
            <button
              onClick={handleEventModal}
              className="flex gap-1 items-center px-2 py-1 rounded-md text-[14px] bg-blue-100 text-blue-500 shadow"
            >
              <span className="text-lg pt-[2px]">+</span>Create Event
            </button>
          </div>
        </div>

        <div className="mt-3 flex gap-4">
          <div className="flex-1 ml-[2px] flex flex-col gap-2">
            <div className="w-[12rem] max-w-full flex gap-4 rounded-2xl bg-white-og text-charcoal px-6 py-3 shadow-md">
              <h1 className="text-6xl font-bold ">{appointments.length}</h1>
              <div>
                <h2 className="text-2xl font-medium"> Events </h2>
                <div className=" font-medium text-zinc-500 capitalize">
                  {selectedEvent}
                </div>
              </div>
            </div>

            {loadingEvent ? (
              <Loader />
            ) : (
              appointments.map((appointment) => {
                var date = new Date(appointment.startTime);
                return (
                  <div
                    key={appointment._id}
                    className=" flex flex-col gap-3 rounded-lg border border-zinc-300 p-4"
                  >
                    <div>
                      <h1 className="text-[17px]"> {appointment.query} </h1>
                      <div className="text-[14px]">{date.toDateString()}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-6 h-6 fill-sky-500 stroke-sky-500" />
                      <h3 className="text-sky-500 pt-[2px]">
                        10:00 AM - 11:00 AM
                      </h3>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="border-l"></div>
          <div className="flex-1 ">
            <Calendar
              className=" custom-calendar"
              tileContent={({ date }) => markDatesWithAppointments(date)}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {eventModal && <CreateEvent handleEventModal={handleEventModal} />}
      </AnimatePresence>
    </motion.div>
  );
}
