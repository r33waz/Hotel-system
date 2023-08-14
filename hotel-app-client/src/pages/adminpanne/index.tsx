import { Tab } from "@headlessui/react";
import React, { useEffect } from "react";
import Allbookings from "../../components/allbooking.components";
import Allrooms from "../../components/allroomscpmponents";
import Alluser from "../../components/allusercomponents";
import { useNavigate } from "react-router-dom";
import Addrooms from "../../components/addRooms.components";

function Adminpannel() {
  const navigate=useNavigate()
  useEffect(() => {
    const userJSON = localStorage.getItem("User");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      if (!user.isAdmin) {
        navigate("/home");
      }
    }
  },[])
  return (
    <>
      <div className="container p-8 mx-auto">
        <div>
          <Tab.Group>
            <Tab.List className="flex flex-wrap w-full gap-4 text-xl font-semibold text-white justify-betweent md:gap-12">
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "outline-none border-b-2 border-white" : ""
                    }
                  >
                    Users
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "outline-none border-b-2 border-white" : ""
                    }
                  >
                    Bookings
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "outline-none border-b-2 border-white" : ""
                    }
                  >
                    Rooms
                  </button>
                )}
              </Tab>
              <Tab>
                {({ selected }) => (
                  <button
                    className={
                      selected ? "outline-none border-b-2 border-white" : ""
                    }
                  >
                    Addrooms
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels className="w-full ">
              <Tab.Panel>
                <Alluser/>
              </Tab.Panel>
              <Tab.Panel>
                <Allbookings />
              </Tab.Panel>
              <Tab.Panel>
                <Allrooms />
              </Tab.Panel>
              <Tab.Panel>
                <Addrooms/>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
}

export default Adminpannel;
