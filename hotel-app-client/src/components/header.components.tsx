import React from "react";

function HeaderComponent() {
  return (
    <>
      <div className="flex justify-around p-4 mx-auto border">
        <div>
          <a href="/home">
            {" "}
            <img
              src="https://images-workbench.99static.com/BbP5f6W_cJ1zxK3J1yywZWHU0ms=/380x3120:953x3693/fit-in/500x500/filters:fill(white,true):format(webp)/99designs-contests-attachments/109/109228/attachment_109228531"
              alt="logo"
              className="w-10 h-10 rounded-full animate-bounce "
            />
          </a>
        </div>
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
    </>
  );
}

export default HeaderComponent;
