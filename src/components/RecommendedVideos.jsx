import { formatDistanceToNow } from "date-fns";
import { FaPlay } from "react-icons/fa6";

import { createMarkup } from "../utils";

import { useDispatch } from "react-redux";
import { increase } from "../store/slices/videoCounterSlice";

const RecommendedVideos = ({ video, setSelectedVideo }) => {
  const dispatch = useDispatch();

  const publishedDate = new Date(video?.snippet.publishedAt);
  let timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true });

  // Delete the prefix "about", "over" and "almost" (native from date-fns)
  timeAgo = timeAgo
    .replace("about ", "")
    .replace("over ", "")
    .replace("almost ", "");

  const handleRecommendedVideoClick = () => {
    setSelectedVideo(video);
    dispatch(increase());
  };

  return (
    <div
      className="w-full group h-fit flex flex-col items-center lg:flex-row gap-2 bg-white hover:bg-gray-50 rounded-xl cursor-pointer"
      onClick={handleRecommendedVideoClick}
    >
      <div className="w-full lg:w-fit h-full bg-white group-hover:bg-gray-50 aspect-video relative">
        <img
          className="w-full lg:w-auto h-auto lg:h-32 rounded-xl"
          src={`${video?.snippet.thumbnails.medium.url}`}
          title={`${video?.snippet.title}`}
        />
        <div className="opacity-0 group-hover:opacity-100 transition-opacity ease-in-out absolute rounded-xl bg-black bg-opacity-50 inset-0 z-10 grid place-items-center">
          <FaPlay className="text-white text-4xl" />
        </div>
      </div>
      <div className="flex flex-col gap-2 px-2 py-2 lg:pr-4 lg:pl-0">
        <span
          className="text-sm h-fit font-bold line-clamp-2 text-ellipsis"
          dangerouslySetInnerHTML={createMarkup(video?.snippet.title)}
        ></span>
        <div>
          <span className="text-sm h-fit line-clamp-2 text-ellipsis">
            {video?.snippet.channelTitle}
          </span>
          {/* Fecha de publicado */}
          <span className="text-xs text-gray-500 text-start line-clamp-2 text-ellipsis">
            {timeAgo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedVideos;
