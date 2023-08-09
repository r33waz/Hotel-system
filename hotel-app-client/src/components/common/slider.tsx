import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Slider from "react-slick";

function Sliders({ posts }) {
  console.log(posts);
  // function LeftArrow({ onClick }) {
  //   return (
  //     <div onClick={onClick}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke-width="2"
  //         stroke="white"
  //         className="w-6 h-6 bg-green rounded-full p-1 cursor-pointer absolute top-[50%] -left-4"
  //       >
  //         <path
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           d="M15.75 19.5L8.25 12l7.5-7.5"
  //         />
  //       </svg>
  //     </div>
  //   );
  // }

  // function RightArrow({ onClick }) {
  //   return (
  //     <div onClick={onClick}>
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke-width="2"
  //         stroke="white"
  //         className="w-6 h-6 bg-green rounded-full p-1 cursor-pointer absolute top-[50%] -right-4 "
  //       >
  //         <path
  //           stroke-linecap="round"
  //           stroke-linejoin="round"
  //           d="M8.25 4.5l7.5 7.5-7.5 7.5"
  //         />
  //       </svg>
  //     </div>
  //   );
  // }
   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
     cssEase: "linear",
   };

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild className="cursor-pointer">
          <button className="p-2 text-white bg-black rounded-sm ">View Details</button>
        </Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 " />
        <Dialog.Content className=" fixed top-[45%] left-[50%]  translate-x-[-48%] translate-y-[-60%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none ">
          <div className="flex gap-2">
            <p className="text-xl font-semibold underline">{posts?.name}:</p>
          </div>

          <div className="">
            <Slider {...settings}>
              {posts?.image.map((imageUrl: any, idx: any) => (
                <div key={idx}>
                  <img src={imageUrl} alt="" className="pt-3 pr-2 rounded-sm"/>
                </div>
              ))}
            </Slider>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-semibold">Room Description:</span>
            <span>{posts?.description}</span>
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px]  items-center justify-center rounded-full "
              aria-label="Close"
            >
              <svg
                className="w-4 h-4 text-gray active:text-green"
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
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
}

export default Sliders;
