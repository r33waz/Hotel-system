import React, { useEffect, useState } from 'react'
import Sliders from './common/slider';
import { set } from 'react-hook-form';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

function BookingComponent({ posts,checkindate,checkoutdate }) {
  console.log(checkindate)
  console.log(checkoutdate)
  return (
    <>

        <div className="grid gap-3 bg-white border sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img
              src={posts.image[0]}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 bg-white">
            <span className="text-xl font-bold"> {posts?.name}</span>
            <div>
              <span className="text-xl font-semibold">Address:</span>
              <span className="text-lg">{posts?.address}</span>
            </div>
            <div>
              <span className="text-xl font-semibold">Max People:</span>
              <span className="text-lg ">{posts?.maxPeople}</span>
            </div>
            <div>
              <span className="text-xl font-semibold">Type: </span>
              <span className="text-lg">{posts?.roomType}</span>
            </div>
            <div>
              <span className="text-xl font-semibold">Number : </span>
              <span className="text-lg">{posts?.phoneNumber}</span>
            </div>
            <div>
              <span className="text-xl font-semibold">Price Per Day : </span>
              <span className="text-lg ">Rs{posts?.pricePerDay}</span>
            </div>
            <div className="flex gap-3">
              <Sliders posts={posts} />
              <button className="p-2 text-white bg-black rounded-sm ">
                  <Link to={`/bookroom/${posts._id}/${checkindate}/${checkoutdate}`}>Book Room</Link>
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default BookingComponent