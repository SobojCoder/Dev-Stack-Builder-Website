import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import type { TechnologiesType } from "../../TechnologiesType";
interface SelectedTechnologiesCardProps {
  technology: TechnologiesType;
  technologiesCount: number;
  setTechnologiesCount: React.Dispatch<React.SetStateAction<number>>;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<TechnologiesType[]>
  >;
}
const SelectedTechnologiesCard = ({
  technology,
  technologiesCount,
  setTechnologiesCount,
  selectedTechnologies,
  setSelectedTechnologies,
}: SelectedTechnologiesCardProps) => {
  const handleRemoveTechnologies = (technologyToRemove: TechnologiesType) => {
    const restTechnologies = selectedTechnologies.filter(
      (selectedTechnology) =>
        selectedTechnology.name !== technologyToRemove.name,
    );
    setSelectedTechnologies(restTechnologies);
    setTechnologiesCount(technologiesCount - 1);
  };
  return (
    <div
      key={technology.id}
      className="flex gap-2 justify-between items-center border-2 border-gray-200 rounded-3xl px-3 py-2 text-center"
    >
      <div className="flex gap-2">
        <img src={technology.icon} alt="" className="w-10 h-15" />
        <div>
          <h3 className="text-xl font-semibold">{technology.name}</h3>
          <p className="text-slate-500">{technology.category}</p>
        </div>
      </div>
      <div>
        <span
          className="text-2xl text-red-300 cursor-pointer"
          onClick={() => handleRemoveTechnologies(technology)}
        >
          <IoCloseCircleOutline />
        </span>
      </div>
    </div>
  );
};

export default SelectedTechnologiesCard;
