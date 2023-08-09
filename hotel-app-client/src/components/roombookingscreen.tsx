import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr'
import { getData, postDataJwt } from '../services/axios.service';
import { Gettoken } from '../utils/helper';
import { ThreeCircles } from 'react-loader-spinner';


function RoomBooking() {
  const { id } = useParams()
  const token = Gettoken()
  const [datas, setDatas] = useState()
  const fetcher=(url:any)=>getData(url,token)
  const {data,isLoading,error} = useSWR(`/room/getallroom/${id}`,fetcher);

  if (error) {
  return (
    <div role="alert">
      <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
        <p>Something not ideal might be happening.</p>
      </div>
    </div>
  );
}

  useEffect(() => {
    setDatas(data?.data)
    if (isLoading) {
      setTimeout(() => {
      },2000)
    }
  },[data])
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ThreeCircles />
        </div>
      ) : (
        <div className="grid gap-3 bg-white border sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-2">
            <img
              src={datas?.image[0]}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 bg-white ">
            <div>
              <span className="text-xl font-bold">Booking Details</span>
            </div>
            <hr></hr>
            <div className="flex gap-2">
              <span className="text-xl font-bold">Name:</span>
              <span className="text-lg">Riwaj Thapa</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Booking Date:</span>
              <span className="text-lg">2022/20/10</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Checkout Date:</span>
              <span className="text-lg">2022/20/11</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Amount:</span>
              <span className="text-lg ">Rs:1500</span>
            </div>
            <hr></hr>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Type:</span>
              <span className="text-lg">Type: {datas?.roomType}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total Day:</span>
              <span className="text-lg">{datas?.phoneNumber}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Price Per Day:</span>
              <span className="text-lg">{datas?.phoneNumber}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total Price :</span>
              <span className="text-lg ">Rs {datas?.pricePerDay}</span>
            </div>
            <div>
                <button className="p-2 text-white bg-black rounded-sm ">
                  Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomBooking

