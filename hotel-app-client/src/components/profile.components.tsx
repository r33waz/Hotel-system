import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileComponent() {
  const [users, setuser] = useState();

  useEffect(() => {
    const userJSON = localStorage.getItem("User");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      setuser(user);
    }
  }, []);
  return (
    <>
      <div className="container p-8 mx-auto">
        <div className="flex flex-col p-8 bg-white ">
          <div className="flex items-center">
            <span className="text-xl">Name: </span>
            <span>{users?.fullname}</span>
          </div>
          <div className="flex items-center bg-white ">
            <span className="text-xl">Id:</span>
            <span>{users?.id}</span>
          </div>
          <div className="flex items-center bg-white">
            <span className="text-xl">Email: </span>
            <span>{users?.email}</span>
          </div>
          <div className="flex items-center bg-white">
            <span className="text-xl">Number:</span>
            <span>{users?.number}</span>
          </div>
          <div className="flex items-center bg-white">
            <span className="text-xl">Admin: </span>
            <span>{users?.isAdmin.toString()}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileComponent;
