import React, { useState } from "react";
import type { TechnologiesType } from "../../../TechnologiesType";
interface TechnologyProps {
  technology: TechnologiesType;
  technologiesCount: number;
  setTechnologiesCount: React.Dispatch<React.SetStateAction<number>>;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies:React.Dispatch<React.SetStateAction<TechnologiesType[]>>;
}
const TechnologiesCard = ({
  technology,
  technologiesCount,
  setTechnologiesCount,
  selectedTechnologies,
  setSelectedTechnologies
}: TechnologyProps) => {
  const [isAdd, setIsAdd] = useState(false);
  const handleSelecteTechnologies = () => {
    setIsAdd(true);
    setTechnologiesCount(technologiesCount + 1);

    //selected card
    setSelectedTechnologies([...selectedTechnologies, technology])
  };
  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-200/40">
        {/* Top gradient glow */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-100 blur-3xl transition-all duration-500 group-hover:bg-purple-200" />

        <div className="relative">
          {/* Icon + Badge */}
          <div className="mb-5 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-3 transition-transform duration-300 group-hover:scale-110">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600 ring-1 ring-purple-200">
              {technology.badge}
            </span>
          </div>

          {/* Name */}
          <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-purple-600">
            {technology.name}
          </h3>

          {/* Description */}
          <p className="mb-5 min-h-[60px] text-sm leading-6 text-slate-500">
            {technology.description}
          </p>

          {/* Divider */}
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          {/* Technology information */}
          <div className="mb-5 flex items-center justify-between gap-2">
            {/* Category */}
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
              {technology.category}
            </span>

            {/* Difficulty */}
            <span className="text-xs text-slate-500">
              {technology.difficulty}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm font-medium text-slate-700">
              <span className="text-yellow-500">★</span>
              {technology.rating}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => handleSelecteTechnologies()}
            disabled={isAdd}
            className={`w-full rounded-xl bg-linear-to-r from-orange-500 to-pink-500 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-300/50 active:scale-[0.98] ${
              isAdd ? "cursor-not-allowed opacity-60 hover:scale-100" : ""
            }`}
          >
            {isAdd ? "✓ Added" : "+ Add to Stack"}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
