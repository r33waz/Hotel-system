import { TextField } from "@mui/material";
import React from "react";

function Home() {
  return (
    <>
      <div className="container p-2 mx-auto">
        <div className="gird grid-col-1">
          <div className="grid grid-col-1">
            <div className="relative">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/209037139.jpg?k=653be5afcd628ef4cbd167589aeec8a08df3890c683e1e5c109857b44ff1d40c&o=&hp=1"
                alt=""
              />
              <div className="absolute top-[50%] w-full">
                <div className="flex justify-between ">
                  <svg
                    className="w-6 h-6 p-1 text-white bg-black rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                  <svg
                    className="w-6 h-6 p-1 text-white bg-black rounded-full"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 pt-4 sm:grid-cols-1 md:grid-cols-4">
          <div className="flex flex-col items-center w-full col-span-3 bg-white border">
            <div className="flex flex-col gap-2">
              <span className="font-serif text-4xl font-extrabold ">
                Welcome
              </span>
              <span className="pl-2 font-serif text-lg font-extrabold">
                Check Availability
              </span>
            </div>
            <div className="flex gap-2 p-2">
              <TextField
                id="firstname"
                label="Firstname"
                variant="outlined"
                // {...register("username", { required: true })}
              />
              <span className="-mt-4 text-red-500">
                {/* {errors.username && "Username is required"} */}
              </span>
              <TextField
                id="lastname"
                label="Lastname"
                variant="outlined"
                // {...register("password", { required: true })}
              />
            </div>
            <div className="flex justify-around gap-2 p-2 sm:flex-wrap">
              <label>
                Check in date <input type="date" className="border " />
              </label>
              <label>
                Check out date <input type="date" className="border " />
              </label>
            </div>
          </div>
          <div>
            <p className="text-white">asadsad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
