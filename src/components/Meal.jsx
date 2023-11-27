import React, { useState } from "react";
import { mealData } from ".././data/data";
import { AiOutlineArrowRight } from "react-icons/ai";

const Meal = () => {
  const [Food, setFood] = useState(mealData);
  const cartFilter = (category) => {
    setFood(
      mealData.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="w-full m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-center py-2 text-2xl">
        Our Meal
      </h1>
      <div className="flex justify-center lg:flex-row ">
        <div className="flex gap-1 justify-center">
          <button
            className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-orange-500"
            onClick={() => setFood(mealData)}
          >
            All
          </button>
          <button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-orange-500"
          onClick={()=>cartFilter('pizza')}
          >
            Pizza
          </button>
          <button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-orange-500"
          onClick={()=>cartFilter('chicken')}>
            Chicken
          </button>
          <button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 border-orange-500"
          onClick={()=>cartFilter('salad')}>
            Salad
          </button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4 py-4  ">
        {Food.map((item) => (
          <div className="hover:scale-105 duration-700 " key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] rounded-lg object-cover "
            />
            <div className="flex justify-between py-2 px-4">
              <p className="font-bold">{item.name}</p>
              <p className="w-[18px] h-[18px] bg-orange-500 text-white rounded-full p-6 -mt-10 text-center flex justify-center items-center border-[6px] font-bold">
                {item.price}
              </p>
            </div>
            <div className="pl-4 py-2 flex items-center text-center ">
              <p className="">viwe More</p>
              <span>
                <AiOutlineArrowRight className="ml-2 w-5 mt-1" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meal;
