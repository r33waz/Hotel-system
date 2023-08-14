import React, { useEffect, useState } from 'react'
import { Gettoken } from '../utils/helper';
import { deletedata, getData } from '../services/axios.service';
import useSWR from "swr";
import { ThreeCircles } from "react-loader-spinner";

function Allrooms() {
  const token = Gettoken();
  const [room,setroom] = useState([]);
  const fetcher = (url: any) => getData(url, token);
  const { data, isLoading} = useSWR("/room/getallrooms", fetcher);

    console.log(room)
  console.log(room);
  useEffect(() => {
    setroom(data?.data);
  }, [data]);


  async function deleteroom(id:any) {
    try {
      const resp = await deletedata(
        `/room/deleteroom/${id}`,
        token
      );
      if (resp.status) {
        const updateroom = room.filter((rooms:any) => {
          return rooms._id!==id
        })
        setroom(updateroom)
      }
    } catch (error) {
      
    }
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
        <>
          <div className="w-full pt-8 text-center">
            <h1 className="inline-block text-xl font-bold text-white border-b-2 border-white">
              All Rooms
            </h1>
            <br />
          </div>

          {room?.map((rooms) => (
            <div className="relative pt-10 overflow-x-auto" key={rooms.id}>
              <div className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Room Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Max people
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price per day
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Room Type
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {rooms?.name}
                    </th>
                    <td className="px-6 py-4">Days:{rooms.maxPeople}</td>
                    <td className="px-6 py-4">Rs:{rooms.pricePerDay}</td>
                    <td className="px-6 py-4">{rooms.roomType}</td>
                    <td className="px-6 py-4">{rooms.description}</td>
                  </tr>
                </tbody>
                <div className='pt-2'>
                  <button
                    onClick={() => {
                      deleteroom(rooms._id);
                    }}
                    type="button"
                    className=" focus:outline-none text-white bg-red-700 hover:bg-red-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Allrooms