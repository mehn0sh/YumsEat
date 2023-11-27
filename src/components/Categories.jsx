import React from "react";
import { categories } from ".././data/data";
const Categories = () => {
  console.log(categories);
  return (
    <div className="w-full m-auto p-4">
      <h1 className="text-orange-500 font-bold text-center py-2 text-2xl">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item) => {
          return (
            <div
              className="flex p-4 justify-center items-center
               hover:scale-105 duration-300"
               key={item.id}
            >
              <img src={item.image} 
              alt={item.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
