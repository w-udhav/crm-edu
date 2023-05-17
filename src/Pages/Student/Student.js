import React from "react";
import About from "./Components/About";
import Parents from "./Components/Parents";
import Subjects from "./Components/Subjects";
import Medical from "./Components/Medical";

export default function Student() {
  const links = [
    {
      id: 1,
      name: "About",
      component: "/",
    },
    {
      id: 2,
      name: "Parents",
      component: "/address",
    },
    {
      id: 3,
      name: "Subjects",
      component: "/parents",
    },
    {
      id: 4,
      name: "Medical",
      component: "/medical",
    },
  ];

  const [active, setActive] = React.useState(1);
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
                  <div className="w-10 h-10 bg-zinc-400 rounded-full"></div>
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
              <button>Edit</button>
            </div>
          </div>
        </div>
        {/* Main */}
        <div className="overflow-y-auto rounded-xl h-full">
          <div className="rounded-2xl flex flex-col gap-12">
            {active === 1 && <About />}
            {active === 2 && <Parents />}
            {active === 3 && <Subjects />}
            {active === 4 && <Medical />}
          </div>
        </div>
      </div>
    </div>
  );
}
