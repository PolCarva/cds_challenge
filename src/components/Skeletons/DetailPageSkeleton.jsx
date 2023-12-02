import React from "react";

const DetailPageSkeleton = () => {
  return (
    <div className="w-full lg:w-5/6 mx-auto">
      <div className="flex flex-wrap mx-auto gap-5 w-full">
        <div className="w-full">
          {/* Title */}
          <div className="h-8 lg:w-1/2 bg-slate-400 animate-pulse" />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row w-full">
          <div className="flex flex-col gap-2 w-full">
            {/* Img */}
            <div className="w-full aspect-video rounded-xl min-w-[50vw] bg-slate-400 animate-pulse select-none" />
            <div className="flex gap-5 items-center justify-between">
              <div className="flex items-center gap-5">
                {/* Profile Img */}
                <div className="w-10 h-10 rounded-full bg-slate-400 animate-pulse"/>
                {/* Profile Name */}
                <div className="w-40 h-8 bg-slate-400 animate-pulse"/>
              </div>
              {/* Date */}
              <div className="text-sm text-gray-500 dark:text-gray-300" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5 lg:w-2/3 max-h-[calc(80svh-2rem)] overflow-y-auto whitespace-break-spaces">
            <div className="w-full h-12 bg-slate-400 animate-pulse"/>
            {/* Desc */}
            <div className="w-full  h-80 bg-slate-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
