import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { getData } from "../services/axios.service";
import { Gettoken } from "../utils/helper";
import { ThreeCircles } from "react-loader-spinner";

function Allbookings() {
  const token = Gettoken();
  const [booking, setbooking] = useState([]);
  const fetcher = (url: any) => getData(url, token);
  const { data, isLoading, error } = useSWR(
    "/booking/bookroom/getallbooking",
    fetcher
  );

  console.log(booking);
  useEffect(() => {
    setbooking(data?.data);
  }, [data]);
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
              All Bookings
            </h1>
            <br />
          </div>

          {booking?.map((book) => (
            <div className="relative pt-10 overflow-x-auto" key={book.id}>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Room Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Days
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Total Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Checkindate
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Checkoutdate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {book?.room}
                    </th>
                    <td className="px-6 py-4">Days: {book?.totalday}</td>
                    <td className="px-6 py-4">Rs: {book.totalprice}</td>
                    <td className="px-6 py-4">{book?.checkindate}</td>
                    <td className="px-6 py-4">{book?.checkoutdate}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Allbookings;
