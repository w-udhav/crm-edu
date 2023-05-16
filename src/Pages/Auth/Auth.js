import React from "react";

export default function Auth() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-p1">
      <div className="max-w-full w-[26rem] border border-black rounded-md bg-black-1 text-white p-8 shadow-lg">
        <div className="flex flex-col gap-6 items-center">
          <h1 className="font-black text-5xl">Welcome</h1>

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
            {/* Fields */}
            <div className="flex flex-col gap-4">
              {/* email */}
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="email"
                  className="text-[12px] font-semibold uppercase text-zinc-400"
                >
                  EMAIL OR PHONE NUMBER
                  <span className="text-red-500 pl-1">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-zinc-900 rounded-md text-[16px] p-2 outline-none border-none"
                />
              </div>

              {/* password */}
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="pass"
                    className="text-[12px] font-semibold uppercase text-zinc-400"
                  >
                    PASSWORD
                    <span className="text-red-500 pl-1">*</span>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    className="bg-zinc-900 rounded-md text-[16px] p-2 outline-none border-none"
                  />
                </div>

                {/* Forgot password */}
                <div className="">
                  <button className="text-blue-400 hover:text-blue-500 text-sm">
                    Forgot your password?
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button onClick={handleSubmit} className="w-full  bg-purple-600 hover:bg-purple-700 rounded-md text-white text-[15px] font-semibold py-2">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
