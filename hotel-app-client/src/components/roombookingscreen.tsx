import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import useSWR from "swr";
import { getData, postDataJwt } from "../services/axios.service";
import { Gettoken } from "../utils/helper";
import { ThreeCircles } from "react-loader-spinner";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";


function RoomBooking() {
  const { id } = useParams();
  const { checkindate } = useParams();
  const { checkoutdate } = useParams();
  const tokens = Gettoken();
  const [datas, setDatas] = useState();
  const [room, setRoom] = useState();
  const[user,setuser]=useState()
  const fetcher = (url: any) => getData(url, tokens);
  const { data, isLoading, error } = useSWR(`/room/getallroom/${id}`, fetcher);

  const startingday = moment(checkindate, "DD-MM-YYYY");
  const endday = moment(checkoutdate, "DD-MM-YYYY");

  const totalday = moment.duration(endday.diff(startingday)).asDays() + 1;
  const totalprice = totalday * datas?.pricePerDay;



  if (error) {
    return (
      <div role="alert">
        <div className="px-4 py-3 text-red-700 bg-red-100 border border-t-0 border-red-400 rounded-b">
          <p>Something went wrong.</p>
        </div>
      </div>
    );
  }

  // console.log(room)
  // console.log(datas)
  useEffect(() => {
    setDatas(data?.data);
    setRoom(data?.data.name);

    if (isLoading) {
      setTimeout(() => {}, 2000);
    }

     const userJSON = localStorage.getItem("User");
    if (userJSON) {
      const user = JSON.parse(userJSON)
      setuser(user)
    }
  }, [data]);

  // console.log(room);
  // console.log(id);

  async function ontoken(token: any) {
    const details = {
      room: room,
      roomid: id,
      checkindate,
      checkoutdate,
      totalprice,
      totalday,
      token
    };

    const resp = await postDataJwt("/booking/bookroom", tokens, details);
    console.log("resp", resp);
  }
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <ThreeCircles
            height="100"
            width="100"
            color="#FFFFFF"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <div className="grid bg-white border sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-2">
            <img
              src={datas?.image[0]}
              alt=""
              className="object-fill w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2 pt-1 bg-white">
            <div>
              <span className="text-xl font-bold">Booking Details</span>
            </div>
            <hr></hr>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Name: </span>
              <span className="text-lg">{user?.fullname}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Checkin Date:</span>
              <span className="text-lg">{`${checkindate}`}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Checkout Date:</span>
              <span className="text-lg">{`${checkoutdate}`}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total days:</span>
              <span className="text-lg">{`${checkoutdate}`}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Price Per Day:</span>
              <span className="text-lg">Rs{datas?.pricePerDay}</span>
            </div>

            <hr></hr>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Type: </span>
              <span className="text-lg">{datas?.roomType}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total person:</span>
              <span className="text-lg">{datas?.maxPeople}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total Day:</span>
              <span className="text-lg">{totalday} days</span>
            </div>

            <div className="flex gap-2">
              <span className="text-xl font-semibold">Total Price :</span>
              <span className="text-lg ">Rs {totalprice}</span>
            </div>

            <StripeCheckout
              amount={totalprice * 100}
              token={ontoken}
              currency="NPR"
              stripeKey="pk_test_51NeJVjFMuaYRWZSkD6iW2010WUF1cvbLJd36h4MbyyFnd4jJwKCYlhTz3NG1YlYNivmz5jv5JPlG4FMxkkbSZkGg001TLW67Mp"
            >
              <div>
                <button className="p-2 text-white bg-black rounded-sm ">
                  Book Now
                </button>
              </div>
            </StripeCheckout>
          </div>
        </div>
      )}
    </>
  );
}

export default RoomBooking;
