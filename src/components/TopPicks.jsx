import React from "react";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { topPicks } from ".././data/data";

export const TopPicks = () => {
  return (
    <div>
      <h1 className="text-orange-500 font-bold text-center py-2 text-2xl">
        Top Picks
      </h1>
      <div className="mx-auto w-full p-2 hidden md:flex">
        <Splide options={{ perPage: 4, gap: "0.5rem" }}>
          {topPicks.map((item) => (
            <SplideSlide key={item.id}>
              <div className="relative rounded-3xl">
                <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white hover:-z-10 ">
                  <p className="px-2 font-bold p-2">{item.title}</p>
                  <p className="px-2">{item.price}</p>
                  <button className="border-white border-dashed text-white mx-2 absolute bottom-4">
                    Add to Cart
                  </button>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-3xl object-cover h-[200px] w-full cursor-pointer hover:scale-105 duration-700  "
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
