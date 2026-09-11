import React from "react";
import banner from "../../assets/banner-stack.png";
const Bannar = () => {
  return (
    <div className="grid grid-cols-2 container mx-auto px-12 ">
      {/* information section */}
      <div className=" mt-28">
        <h1 className="text-5xl font-bold ">
          Build Your Ideal <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] w-112.5 my-6">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 mt-16">
          <button className="text-[#ffffff] text-lg px-6 py-4 rounded-xl bg-linear-to-r from-[#F97316] to-[#EC4899]">Explore Technologies</button>
          <button className="text-lg border px-16 py-4 rounded-xl border-[#E5E7EB] text-[#374151]">Learn More</button>
        </div>
      </div>
      {/* image section */}
      <div className="flex justify-end">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Bannar;
