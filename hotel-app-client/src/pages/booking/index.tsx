import React, { useEffect, useState } from "react";
import { getData } from "../../services/axios.service";
import { Gettoken } from "../../utils/helper";
import useSWR from "swr";

import BookingComponent from "../../components/booking.components";
import { ThreeCircles } from "react-loader-spinner";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import moment from 'moment'

function Booking() {
  const token = Gettoken();
  const [room, setRoom] = useState([]);
  const [checkindate, setChechkindate] = useState('')
  const[checkoutdate,setChechoutdate]=useState('')
  
//   console.log(room);
  //*Using two ways to fetch data from Rest API

  //*One using simple function with axios call
  //   async function getalldata() {
  //        const  resp = await getData("/room/getallrooms", token);
  //       console.log(resp);
  //       setRoom(resp?.data)
  //   }

  //   useEffect(() => {
  //       getalldata();
  //   }, [])
  //* Another withusing SWR which is a library that manages us our state and other many more functions

  const fetcher = (url: any) => getData(url, token).then((res) => res);
  const { data,isLoading, error,} = useSWR("/room/getallrooms", fetcher);
  //   console.log(data?.data);
  useEffect(() => {
    // console.log(data?.data);
    setRoom(data?.data);

    if (isLoading) {
      setTimeout(() => {},5000);
    }
    
    
  }, [data]);

  function filterbydate(dates: any) {
    // console.log(dates)
    // console.log(moment(dates[0]).format('DD-MM-YYYY'))
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));
    setChechkindate(dates[0].format("DD-MM-YYYY"));
    setChechoutdate(dates[1].format("DD-MM-YYYY"));
  
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
        <div className="container p-8 mx-auto">
          <div className="flex flex-col w-1/5 pb-5">
            <span className="text-lg font-bold text-white">
              Pick booking date
            </span>
            <RangePicker  onChange={filterbydate} />
          </div>
          {/* {
          room?.filter((type) => {
           return type?.roomType === "Couple Room"
          })
        } */}
          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {room?.map((item: any) => (
              <BookingComponent
                posts={item}
                key={item.id}
                checkindate={checkindate}
                checkoutdate={checkoutdate}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Booking;
