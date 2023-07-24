import * as React from "react";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { Button} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram } from "react-icons/bs";
function Login() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div>
          <img
            className="object-cover w-[100%] h-[100%]"
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
          />
        </div>
        <div className="border-2 flex-col flex gap-6 p-1 bg-white">
          <div>
            <p className="font-bold text-2xl text-blue-500">Welcome Back!</p>
            <p className="font-bold text-blue-500 mm">Login to continue</p>
          </div>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <div className="flex justify-center flex-col gap-3 ">
            <Button variant="contained" className="w-full">
              Login
            </Button>
            <Button className="flex gap-3 " variant="outlined">
              <FcGoogle className="  w-6 h-6 text-gradient-to-r from-green-200 via-green-300 to-blue-500" />{" "}
              Sign in with Google
            </Button>
          </div>
          <div className="flex flex-col items-center gap-3 ">
            <span className=" text-gray-500 text-xs font-sans">
              Let's get connected
            </span>
            <div className="flex gap-8">
              <a href="https://www.facebook.com/reewaz.thapa.77/`">
                <BsFacebook className="text-blue-500 w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/r33waz/">
                <BsInstagram className="  w-6 h-6 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-md p-1" />
              </a>
              <a href="https://www.google.com/">
                <FcGoogle href="" className="  w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>
              Dont't have an account?
              <a href="/signup" >Sign up
              </a>
            </p>
          </div>
          <div>
            <p className="text-center text-gray-400 text-xs">
              ©️Copyright by Denver Hotel 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
