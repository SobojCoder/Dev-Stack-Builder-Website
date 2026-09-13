import React from "react";
import type { TechnologiesType } from "../../TechnologiesType";
import SelectedTechnologiesCard from "./SelectedTechnologiesCard";
import { IoCloseCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
interface StackCardProps {
  technologiesCount: number;
  setTechnologiesCount: React.Dispatch<React.SetStateAction<number>>;
  selectedTechnologies: TechnologiesType[];
  setSelectedTechnologies: React.Dispatch<
    React.SetStateAction<TechnologiesType[]>
  >;
}
const StackCard = ({
  technologiesCount,
  setTechnologiesCount,
  selectedTechnologies,
  setSelectedTechnologies,
}: StackCardProps) => {
  const handleRemoveAll = () => {
    toast.error("remove all stack")
    setSelectedTechnologies([]);
    setTechnologiesCount(0);
  };
  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-slate-900">Your Stack</h3>
          {selectedTechnologies.length === 0 ? (
            <p className="mt-1 text-sm text-slate-500">
              No technologies selected yet.
            </p>
          ) : (
            <p className="mt-1 text-sm text-slate-500">
              {`${technologiesCount} Technologies selected.`}
            </p>
          )}
        </div>

        {/* Empty State */}
        <div className=" flex flex-col  rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2 ">
          <div className="grid grid-cols-1 gap-7 px-0 py-1">
            {selectedTechnologies.length === 0 && (
              <p className="text-gray-600 text-center py-4">
                Your stack is empty
              </p>
            )}

            {selectedTechnologies.map(
              (technology: TechnologiesType, ind: number) => {
                return (
                  <SelectedTechnologiesCard
                    key={ind}
                    technology={technology}
                    technologiesCount={technologiesCount}
                    setTechnologiesCount={setTechnologiesCount}
                    selectedTechnologies={selectedTechnologies}
                    setSelectedTechnologies={setSelectedTechnologies}
                  />
                );
              },
            )}
          </div>
          {selectedTechnologies.length != 0 ? (
            <div
              onClick={handleRemoveAll}
              className=" cursor-pointer border border-red-400 flex gap-2 justify-center items-center px-6 py-3  text-red-400  mx-8 rounded-2xl"
            >
              {" "}
              <button className="text-xl cursor-pointer">Close All </button>
              <span className="text-2xl">
                <IoCloseCircleOutline />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default StackCard;
