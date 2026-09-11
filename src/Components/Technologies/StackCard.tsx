import React from "react";

const StackCard = () => {
  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
        {/* Header */}
        <div className="mb-5">
          <h3 className="text-2xl font-bold text-slate-900">Your Stack</h3>

          <p className="mt-1 text-sm text-slate-500">
            No technologies selected yet.
          </p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-10 py-6 text-center">
    
          <p className=" font-semibold text-[#64748B]">
            Your stack is empty
          </p>

        </div>
      </div>
    </div>
  );
};

export default StackCard;
