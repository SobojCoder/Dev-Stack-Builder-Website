import React, { use } from "react";
import type { TechnologiesType } from "../../TechnologiesType";
import TechnologiesCard from "./TechnologiesCard/TechnologiesCard";
interface technologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
}
const Technologies = ({ technologiesPromise }: technologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);
  return (
    <div>
      <div className="container mx-auto px-12">
        <h1 className="text-4xl font-bold">
          Explore the{" "}
          <span className="bg-linear-to-r from-[#F97316]  to-[#EC4899] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="py-3 text-[#64748B] text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-3 container mx-auto px-12 mt-12">
        <div className="col-span-3">
      <div className="grid grid-cols-3 gap-8">
            { technologies.map((technology:TechnologiesType) => {
          return (
           <TechnologiesCard technology= {technology}/>
          );
        })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
