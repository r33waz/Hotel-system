import { Button, TextField } from "@mui/material";
import React from "react";
import HeaderComponent from "../../components/header.components";
import ImageSlider from "../../components/imageslider.components";

function Home() {
  return (
    <>
      <HeaderComponent />
      <div className="pt-5">
        <div className="w-full pr-2 text-right">
          <a href="/booking" className="p-2 text-right bg-white rounded">
            Booking
          </a>
        </div>
        <div className="">
          <ImageSlider />
        </div>
      </div>
    </>
  );
}

export default Home;
