import React, { useState } from "react";

function HeaderComponent() {

  const [isMobile, setMobile] = useState(false)
  function navbarTogel() {
    setMobile(isMobile)
  }

  
  return (
    <>
      <div className="flex justify-between p-4 mx-auto border">
        <div className="w-full">
          <a href="/home">
            <img
              src="https://images-workbench.99static.com/BbP5f6W_cJ1zxK3J1yywZWHU0ms=/380x3120:953x3693/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/109/109228/attachment_109228531"
              alt="logo"
              className="w-12 h-12 rounded-full "
            />
          </a>
        </div>
        <div className="flex justify-between">
          <ul className="flex gap-4">
            <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
              <a>Home</a>
            </li>
            <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
              <a>About</a>
            </li>
            <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
              <a>Gallary</a>
            </li>
          </ul>
        </div>
        <button onClick={navbarTogel}>
          {isMobile ? (
            <svg
              className="w-6 h-6 text-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>
      {isMobile && (
        <div className="flex flex-col items-start gap-3 pl-3 ease-out md:hidden lg:hidden ">
          <div className="flex">
            <ul className="flex gap-4">
              <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
                <a>Home</a>
              </li>
              <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
                <a>About</a>
              </li>
              <li className="p-1 text-white rounded-md hover:bg-white hover:text-black">
                <a>Gallary</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
