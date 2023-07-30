import { Button, TextField } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/header.components";
import ImageSlider from "../../components/imageslider.components";

function Home() {
  return (
    <>
      <HeaderComponent />

      <div className="p">
        <div className="pl-8 pr-8">
          <ImageSlider />
        </div>
        <div className="container mx-auto">
          <div className="grid pt-4 sm:grid-cols-2 md:grid-cols-2">
            <div className="flex flex-col items-center w-full bg-white border">
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
              <div className="flex justify-around gap-2 p-2 sm:flex-wrap ">
                <label>
                  Check in date{" "}
                  <input type="date" className="border " id="chechindate" />
                </label>
                <label>
                  Check out date{" "}
                  <input type="date" className="border " id="chechoutdate" />
                </label>
              </div>
              <Button variant="contained" type="submit">
                Book
              </Button>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          ;
        </div>
      </div>
    </>
  );
}

export default Home;
