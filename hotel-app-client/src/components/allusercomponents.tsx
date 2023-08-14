import React, { useEffect, useState } from "react";
import { Gettoken } from "../utils/helper";
import { deletedata, getData } from "../services/axios.service";
import useSWR from "swr";
import { ThreeCircles } from "react-loader-spinner";

function Alluser() {
  const token = Gettoken();
  const [user, setUser] = useState([]);
  const fetcher = (url: any) => getData(url, token);
  const { data, isLoading} = useSWR("/users/getalluser", fetcher);

  console.log(user);
  console.log(user);
  useEffect(() => {
    setUser(data?.data);
  }, [data]);

async function deleteUser(id: any) {
  try {
    const resp = await deletedata(`/users/delete/${id}`, token);
    console.log(resp)

    if (resp.status) {
      const updatedUsers = user.filter((users: any) => {
        return users._id !== id;
      });
      setUser(updatedUsers);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
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
              All Users
            </h1>
            <br />
          </div>

          {user?.map((users) => (
            <div className="relative pt-10 overflow-x-auto" key={users.id}>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      User Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Number
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Country
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Roles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {users?.fullname}
                    </th>
                    <td className="px-6 py-4">{users.number}</td>
                    <td className="px-6 py-4">{users.country}</td>
                    <td className="px-6 py-4">{users.email}</td>
                    <td className="px-6 py-4">{users.roles}</td>
                  </tr>
                </tbody>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      deleteUser(users._id);
                    }}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
                  >
                    Delete
                  </button>

                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Eidit
                  </button>
                </div>
              </table>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default Alluser;
