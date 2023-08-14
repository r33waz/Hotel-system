import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {  postDataJwt } from "../../services/axios.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { errortoast, sucesstoast } from "../../services/tostify.service";
import { Gettoken } from "../../utils/helper";
import signupSVG from '../../assets/Sign up.gif'

const signinSchema = yup.object({
  fullname: yup.string().required("Firstname is required"),
  country: yup.string().required("Enter your country"),
  email: yup.string().required("Enter your email"),
  city: yup.string().required("Enter you city"),
  number: yup.string().required("Enter your number"),
  password: yup.string().required("Enter your password"),
});

type signinForm = {
  fullname: string;
  country: string;
  city: string;
  email: string;
  number: string;
  password: string;
};

function Signup() {
  const navigate = useNavigate();
  const token = Gettoken()
  const dispatch = useDispatch()

  
  const from = useForm<signinForm>({
    defaultValues: {
      fullname: "",
      country: "",
      city: "",
      email: "",
      number: "",
      password: "",
    },
    resolver: yupResolver(signinSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = from;

  async function onSubmit(data: any) {
    console.log(data);
    const resp = await postDataJwt("/users/signup",token, data);
    console.log(resp);
    if (resp.status) {
      dispatch(login(resp.data))
      navigate("/login");
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
                src={signupSVG}
              />
            </div>
            <div className="flex flex-col items-center gap-2 p-1 bg-white border-2">
              <div className="w-full text-center">
                <p className="text-2xl font-bold ">Welcome🙏</p>
                <p className="font-bold ">Create your account </p>
              </div>
              <div className="flex flex-col justify-center w-9/12 gap-2 p-8">
                <TextField
                  id="fullname"
                  label="Full name"
                  variant="outlined"
                  className="w-full"
                  {...register("fullname", {
                    required: true,
                    minLength: 3,
                    maxLength: 10,
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.fullname?.message}
                </span>
                <TextField
                  id="country"
                  label="Country"
                  variant="outlined"
                  className=""
                  {...register("country", { required: true })}
                />
                <span className="text-xs text-red-500">
                  {errors.country?.message}
                </span>
                <TextField
                  id="city"
                  label="City"
                  variant="outlined"
                  className=""
                  {...register("city", { required: true })}
                />
                <span className="text-xs text-red-500">
                  {errors.country?.message}
                </span>

                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...register("email", {
                    required: true,
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.email?.message && "invalid email format"}
                </span>
                <TextField
                  id="number"
                  label="Phone Number"
                  variant="outlined"
                  {...register("number", {
                    required: true,
                    pattern: /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/,
                  })}
                />
                <span className="text-xs text-red-500">
                  {errors.number?.message}
                </span>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  {...register("password", { required: true })}
                />

                <span className="text-xs text-red-500">
                  {errors.password?.message}
                </span>
              </div>

              <div className="flex flex-col justify-center w-9/12 gap-3 pl-8 pr-8 ">
                <button
                  type="submit"
                  className="p-2 text-white bg-black rounded-md active:bg-white active:text-black active:border-2 active:border-black"
                >
                  Signup
                </button>
              </div>
              <div className="flex flex-col items-center gap-3 ">
                <span className="font-sans text-xs text-gray-500 ">
                  Let's get connected
                </span>
                <div className="flex w-full gap-8">
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
                  Already have account?
                  <a href="/login" className="text-blue-500 underline">
                    Login
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

export default Signup;
