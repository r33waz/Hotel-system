import React from "react";
import { Tab } from "@headlessui/react";
import ProfileComponent from "../../components/profile.components";

function ProfilePage() {
  
  return (
    <Tab.Group>
      <Tab.List className="flex flex-wrap justify-center gap-4 text-xl font-semibold text-white md:gap-12 ">
        <Tab>
          {({ selected }) => (
            <button
              className={selected ? "outline-none border-b-2 border-white" : ""}
            >
              My Profile
            </button>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <button
              className={selected ? "outline-none border-b-2 border-white" : ""}
            >
              My Bookings
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels className="w-full ">
        <Tab.Panel>
          <ProfileComponent />{" "}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export default ProfilePage;
