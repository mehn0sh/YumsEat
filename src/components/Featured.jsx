import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Featured = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];
  const PrevSlider = () => {
    const newIndex = currentIndex == 0 ? sliders.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlider = () => {
    const newindex = currentIndex === sliders.length - 1 ? 0 : currentIndex + 1;
    setcurrentIndex(newindex);
  };
  const moveToNextSlide = (index) => {
    setcurrentIndex(index);
  };
  useEffect(() => {
  let interval=setInterval(() => {
   nextSlider()
    }, 5000);
    return ()=> clearInterval(interval)
  }, [currentIndex]);
  return (
    <div className="h-[500px] max-w-[1520px] w-full p-4 relative group">
      <div
        className="w-full h-full bg-center bg-cover duration-500 rounded-2xl"
        style={{ backgroundImage: `url(${sliders[currentIndex].url})` }}
      ></div>
      <div
        className=" hidden rounded-full text-2xl bg-orange-700 absolute top-[50%] left-5 text-white p-2 cursor-pointer -translate-x-0 group-hover:block"
        onClick={PrevSlider}
      >
        <BsChevronCompactLeft />
      </div>
      <div
        className=" hidden rounded-full text-2xl bg-orange-700 absolute top-[50%] right-5 text-white p-2 cursor-pointer -translate-x-0 group-hover:block"
        onClick={nextSlider}
      >
        <BsChevronCompactRight />
      </div>
      <div className="flex justify-center py-2">
        {sliders.map((item, itemIndex) => (
          <div className="mx-1" key={itemIndex}>
            <RxDotFilled
              className={`cursor-pointer text-2xl ${
                itemIndex == currentIndex && "text-orange-700"
              }`}
              onClick={() => moveToNextSlide(itemIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
