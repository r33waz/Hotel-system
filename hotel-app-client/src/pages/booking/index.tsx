import React, { useEffect, useState } from "react";
import { getData } from "../../services/axios.service";
import { Gettoken } from "../../utils/helper";
import useSWR from "swr";

import BookingComponent from "../../components/booking.components";
import { ThreeCircles } from "react-loader-spinner";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import moment from "moment";
import ImageSlider from "../../components/imageslider.components";

function Booking() {
  const token = Gettoken();
  const [room, setRoom] = useState([]);
  const [checkindate, setChechkindate] = useState("");
  const [checkoutdate, setChechoutdate] = useState("");

  const [secondaryroom, setsecondaryroom] = useState([]);
  const [searchbyroom, setsearchbyroom] = useState("");
  const [searchbycategory, setsearchbycategory] = useState("All");

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

 const userJSON = localStorage.getItem("User");

  const fetcher = (url: any) => getData(url, token).then((res) => res);
  const { data, isLoading } = useSWR("/room/getallrooms", fetcher);
  //   console.log(data?.data);
  useEffect(() => {
    // console.log(data?.data);
    setRoom(data?.data);
    setsecondaryroom(data?.data);
    console.log(room);

    if (isLoading) {
      setTimeout(() => {}, 5000);
    }
  }, [data]);

  function filterbydate(dates: any) {
    // console.log(dates)
    // console.log(moment(dates[0]).format('DD-MM-YYYY'))
    // console.log(moment(dates[1]).format("DD-MM-YYYY"));
    setChechkindate(moment(dates[0]).format("DD-MM-YYYY"));
    setChechoutdate(moment(dates[1]).format("DD-MM-YYYY"));
    const Temoroom = [];
    let avilableRoom = false;
    for (const room of secondaryroom) {
      if (room.bookings.length > 0) {
        for (const booking of room.bookings) {
          if (
            !moment(
              moment(moment(dates[0]).format("DD-MM-YYYY")).isBetween(
                booking.checkindate,
                booking.checkoutdate
              )
            ) &&
            !moment(
              moment(moment(dates[1]).format("DD-MM-YYYY")).isBetween(
                booking.checkindate,
                booking.checkoutdate
              )
            )
          ) {
            if (
              moment(dates[0]).format("DD-MM-YYYY") !== booking.checkindate &&
              moment(dates[0]).format("DD-MM-YYYY") !== booking.checoutdate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.checkindate &&
              moment(dates[1]).format("DD-MM-YYYY") !== booking.checkoutdate
            ) {
              avilableRoom = true;
            }
          }
        }
      }
      if (avilableRoom == true || room.bookings.length === 0) {
        Temoroom.push(room);
        setRoom(Temoroom);
      }
    }
  }

  function filterroom() {
    const rooms = secondaryroom.filter((room) =>
      room.name.toLowerCase().includes(searchbyroom.toLocaleLowerCase())
    );
    setRoom(rooms);
  }
  function filterByCategory(e:any) {
    if (e !== "All") {
      const roomsCategory = secondaryroom.filter(
        (rooms) => rooms.roomType.toLowerCase() == e.toLowerCase()
      );
      setRoom(roomsCategory);
    } else {
      setRoom(secondaryroom);
    }
  }

  const [user,setuser]=useState()
    useEffect(() => {
      const userJSON = localStorage.getItem("User");
      if (userJSON) {
        const user = JSON.parse(userJSON);
        setuser(user);
      }
    }, []);
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
          <div className="">
            <ImageSlider />
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="flex flex-col pb-3 pt-9">
              <span className="text-lg font-bold text-white ">
                Pick booking date
              </span>
              <RangePicker onChange={filterbydate} />
            </div>
            <div className="w-full pt-9">
              <span className="text-lg font-bold text-white ">
                Search Rooms
              </span>
              <input
                type="text"
                className="w-full h-8 pl-5 rounded-md"
                placeholder="Search"
                value={searchbyroom}
                onChange={(e) => {
                  setsearchbyroom(e.target.value);
                }}
                onKeyUp={filterroom}
              />
            </div>

            <div className="w-full">
              <div className="flex items-center justify-end ">
                <span className="flex p-1 text-lg font-bold bg-white rounded-md">
                  <div className="flex flex-col">
                    <a href="/profile ">{user?.fullname}</a>
                    <span className="text-xs">{user?.email}</span>
                  </div>
                  <svg
                    className="w-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 14 18"
                  >
                    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                </span>
              </div>
              <span className="text-lg font-bold text-white">
                Search By Category
              </span>
              <select
                className="w-full h-8 pl-5 rounded-md"
                value={searchbycategory}
                onChange={(e) => filterByCategory(e.target.value)}
              >
                <option value="">All</option>
                <option value="Couple Room">Couple Room</option>
                <option value="Single Room">Family Room</option>
                <option value="Double Room">Deluxe Room</option>
              </select>
            </div>
          </div>

          {/* {
          room?.filter((type) => {
           return type?.roomType === "Couple Room"
          })
        } */}
          <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
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
