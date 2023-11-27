import React from "react";

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-orange-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className=" grid mx-auto grid md:grid-cols-2 w-full">
        <img
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp"
          alt=""
          className="mx-auto py-4 w-[550px]"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            limitless convenience on the device
          </h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda,
            voluptate reprehenderit dolore autem cum ullam sed odit
            perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className="text-[#00df9a] bg-black rounded-md my-6 w-[200px] py-3 mx-auto md:mx-0">Get Started</button>
        </div>
      </div>
    </div>
  ); 
};

export default Delivery;
