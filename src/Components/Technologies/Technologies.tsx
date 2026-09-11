import React, { use } from "react";
import type { TechnologiesType } from "../../TechnologiesType";
import TechnologiesCard from "./TechnologiesCard/TechnologiesCard";
import StackCard from "./StackCard";
import Footer from "../Footer/Footer";
interface technologiesProps {
  technologiesPromise: Promise<TechnologiesType[]>;
  technologiesCount: number;
  setTechnologiesCount: React.Dispatch<React.SetStateAction<number>>;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<TechnologiesType[]>
  >;
}
const Technologies = ({
  selectedTechnologies,
  setSelectedTechnologies,
  technologiesPromise,
  technologiesCount,
  setTechnologiesCount,
}: technologiesProps) => {
  const technologies = use(technologiesPromise);

  return (
    <div>
      <div className="container mx-auto px-12">
        <h1 className="text-4xl font-bold">
          Explore the
          <span className="bg-linear-to-r from-[#F97316]  to-[#EC4899] bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className="py-3 text-[#64748B] text-lg">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      {/* card */}
      <div className="grid grid-cols-6 gap-6 container mx-auto px-12 mt-12 ">
        <div className="col-span-4">
          {/* technology card */}
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((technology: TechnologiesType) => {
              return (
                <TechnologiesCard
                  key={technology.id}
                  technology={technology}
                  technologiesCount={technologiesCount}
                  setTechnologiesCount={setTechnologiesCount}
                  selectedTechnologies={selectedTechnologies}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>
        </div>
        {/* stack card */}
        <div className="col-span-2">
          <StackCard
            technologiesCount={technologiesCount}
            setTechnologiesCount={setTechnologiesCount}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
      <div className="divider" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Technologies;
