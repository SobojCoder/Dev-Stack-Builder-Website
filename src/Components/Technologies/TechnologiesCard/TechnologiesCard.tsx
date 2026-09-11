import React from "react";
import type { TechnologiesType } from "../../../TechnologiesType";
interface TechnologyProps{
    technology: TechnologiesType
}
const TechnologiesCard = ({technology}:TechnologyProps) => {
  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Top gradient glow */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20" />

        <div className="relative">
          {/* Icon + Badge */}
          <div className="mb-5 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3 transition-transform duration-300 group-hover:scale-110">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400 ring-1 ring-purple-500/20">
              {technology.badge}
            </span>
          </div>

          {/* Name */}
          <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            {technology.name}
          </h3>

          {/* Description */}
          <p className="mb-5 min-h-[60px] text-sm leading-6 text-slate-400">
            {technology.description}
          </p>

          {/* Divider */}
          <div className="mb-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Technology information */}
          <div className="mb-5 flex items-center justify-between gap-2">
            {/* Category */}
            <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              {technology.category}
            </span>

            {/* Difficulty */}
            <span className="text-xs text-slate-400">
              {technology.difficulty}
            </span>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm font-medium text-white">
              <span className="text-yellow-400">★</span>
              {technology.rating}
            </div>
          </div>

          {/* Button */}
          <button className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-pink-500/20 active:scale-[0.98]">
            + Add to Stack
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesCard;
