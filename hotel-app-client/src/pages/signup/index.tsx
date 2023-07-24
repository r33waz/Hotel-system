import { Button, TextField } from '@mui/material';
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

function Signup() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div>
            <img
              className="object-cover w-[100%] h-[100%]"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
            />
          </div>
          <div className="flex flex-col gap-2 p-1 bg-white border-2">
            <div>
              <p className="text-2xl font-bold text-blue-500">Welcome🙏</p>
              <p className="font-bold text-blue-500 mm">Create your account </p>
            </div>
            <div className='flex gap-2'>
              <TextField
                id="firstname"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="lastname"
                label="Last Name"
                variant="outlined"
              />
            </div>
       
            <div className='flex gap-2'>
              <TextField
                id="country"
                label="Country"
                variant="outlined"
              />
              <TextField
                id="city"
                label="City"
                variant="outlined"
              />
            </div>
  
              <TextField
                id="email"
                label="Email"
                variant="outlined"
              />
              <TextField
                id="number"
                label="Phone Number"
                variant="outlined"
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
              />
         
       
            <div className="flex flex-col justify-center gap-3 ">
              <Button variant="contained" className="w-full">
                Signup
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
                Already have account?
                <a href="/login" className="text-blue-500 underline">
                  Sign up
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
    </>
  );
}

export default Signup