import * as React from "react";
import TextField from "@mui/material/TextField";

import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { useForm } from "react-hook-form";
import {  postDataJwt } from "../../services/axios.service";
import { errortoast, sucesstoast } from "../../services/tostify.service";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./auth";
import { Gettoken } from "../../utils/helper";

const loginSchema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

type loginform = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = Gettoken();
  const form = useForm<loginform>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  async function onSubmit(data: any) {
    console.log(data);
    const resp = await postDataJwt("/users/login", token, data);
    if (resp.status) {
      localStorage.setItem("token",resp.data.token)
      console.log(resp.data)
      dispatch(login(resp.data));
      navigate("/home");
      sucesstoast(resp.message);
    } else {
      errortoast(resp.message);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center h-screen ">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div>
              <img
                className="object-cover w-[100%] h-[100%]"
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
              />
            </div>
            <div className="flex flex-col gap-5 p-1 bg-white border-2">
              <div>
                <p className="text-2xl font-bold text-blue-500">
                  Welcome Back!
                </p>
                <p className="font-bold text-blue-500 mm">Login to continue</p>
              </div>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                {...register("email", { required: true })}
              />
              <span className="-mt-4 text-red-500">
                {errors.email?.message}
              </span>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                {...register("password", { required: true })}
              />
              <span className="-mt-4 text-red-500">
                {errors.password?.message}
              </span>
              <div className="flex flex-col justify-center gap-3 ">
                <Button variant="contained" className="w-full" type="submit">
                  Login
                </Button>
                <Button className="flex gap-3 " variant="outlined">
                  <FcGoogle className="w-6 h-6 text-gradient-to-r from-green-200 via-green-300 to-blue-500" />{" "}
                  Sign in with Google
                </Button>
              </div>
              <div className="flex flex-col items-center gap-3 ">
                <span className="font-sans text-xs text-gray-500 ">
                  Let's get connected
                </span>
                <div className="flex gap-8">
                  <a href="https://www.facebook.com/reewaz.thapa.77/`">
                    <BsFacebook className="w-6 h-6 text-blue-500" />
                  </a>
                  <a href="https://www.instagram.com/r33waz/">
                    <BsInstagram className="w-6 h-6 p-1 text-white rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" />
                  </a>
                  <a href="https://www.google.com/">
                    <FcGoogle href="" className="w-6 h-6 " />
                  </a>
                </div>
              </div>

              <div className="text-sm text-center">
                <p>
                  Dont't have an account?
                  <a href="/" className="text-blue-500">
                    Signup
                  </a>
                </p>
              </div>
              <div>
                <p className="text-xs text-center text-gray-400">
                  ©️Copyright by Denver Hotel 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
