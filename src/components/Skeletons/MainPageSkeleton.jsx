import React from "react";

const MainPageSkeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-center w-full flex-1 min-h-[calc(80svh-1.25rem)] pb-2 dark:bg-gray-800 dark:text-white">
      <div className="w-full lg:w-1/2 h-fit flex flex-col gap-5">
        <div className="w-full aspect-video rounded-xl bg-slate-400 animate-pulse" />

        <div className="flex flex-col gap-2">
          <h1 className="h-8 w-1/2 bg-slate-400  rounded-xl animate-pulse" />
          <div className="py-7 w-full lg:w-1/3 self-end rounded-xl bg-slate-400 animate-pulse"></div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/3 gap-5 max-h-[80svh] pb-5 lg:mb-0">
        <span className="h-12 w-2/3 bg-slate-400  rounded-xl animate-pulse" />
        <div className="w-full pb-5 lg:pb-0 aspect-video order-2 lg:order-1 flex-1 flex flex-col bg-white dark:bg-gray-800 gap-5 overflow-visible lg:overflow-y-auto">
          <div className="w-full h-40 bg-slate-400 animate-pulse rounded-xl"></div>
          <div className="w-full h-40 bg-slate-400 animate-pulse rounded-xl"></div>
          <div className="w-full h-40 bg-slate-400 animate-pulse rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPageSkeleton;
