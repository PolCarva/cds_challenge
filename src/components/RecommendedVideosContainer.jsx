import { useSelector } from "react-redux";

import RecommendedVideos from "./RecommendedVideos";

const RecommendedVideosContainer = ({ videos, setSelectedVideo, selectedVideoId }) => {
  const videoCounter = useSelector((state) => state.videoCounter.value);
  const filteredVideos = videos.filter(video => video.id.videoId !== selectedVideoId);


  return (
    <div className="flex flex-col w-full lg:w-1/3 gap-5 lg:max-h-[80svh] pb-5 lg:mb-0">
      <span className="font-bold text-2xl order-2 lg:order-1">
        Recommended Videos:
      </span>
      <div className="w-full pb-5 lg:pb-0 aspect-video order-2 lg:order-1 flex-1 flex flex-col bg-white dark:bg-gray-800 gap-5 overflow-visible lg:overflow-y-auto">
        {filteredVideos.slice(0,3).map((video) => {
          return (
            <RecommendedVideos
              key={video.id.videoId}
              video={video}
              setSelectedVideo={setSelectedVideo}
            />
          );
        })}
      </div>
      <p className="text-xl text-center order-1 lg:order-2">
        Total videos watched:
        <span className="font-medium"> {videoCounter}</span>
      </p>
    </div>
  );
};

export default RecommendedVideosContainer;
