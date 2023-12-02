import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { formatDate } from "../utils";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getChannelData, getVideoById } from "../api";
import { createMarkup } from "../utils";
import DetailPageSkeleton from "../components/Skeletons/DetailPageSkeleton";

const DetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const video = await getVideoById(id);
      const channel = await getChannelData(video.items[0].snippet.channelId);
      setVideo(video.items[0]);
      setChannel(channel);

      console.log(video.items[0]);
      console.log(channel);
      setIsLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="w-full min-h-[100svh] h-fit px-5 flex flex-col gap-5 dark:bg-gray-800 dark:text-white">
      <Header>
        <div className="flex gap-5 hover:scale-110 hover:rotate-12 transition-all ease-in-out">
          <Link className="cursor-pointer relative group" to={-1}>
            <img
              src="/img/hex.png"
              alt="Código del Sur Logo"
              className="w-12 h-12 object-contain select-none"
            />
            <FaAngleLeft className="absolute group-hover:-rotate-12 transition-all ease-in-out text-white w-6 h-6 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
          </Link>
        </div>
      </Header>

      {isLoading && <DetailPageSkeleton />}

      {!isLoading && (
        <div className="w-full lg:w-5/6 mx-auto">
          <div className="flex flex-wrap mx-auto gap-5 w-full">
            <div className="w-full">
              <h1
                className="text-2xl font-bold line-clamp-2 lg:w-4/6"
                dangerouslySetInnerHTML={createMarkup(video?.snippet?.title)}
              />
            </div>
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="flex flex-col gap-2">
                <img
                  className="w-full aspect-video rounded-xl object-cover select-none"
                  src={
                    video?.snippet?.thumbnails?.maxres?.url ||
                    "/img/noImage.png"
                  }
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "/img/noImage.png";
                  }}
                  alt={video?.snippet?.title}
                />
                <div className="flex gap-5 items-center justify-between">
                  <div className="flex items-center gap-5">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={channel?.thumbnails?.default?.url}
                      alt={channel?.title}
                    />
                    <Link
                      to={`https://www.youtube.com/${channel?.customUrl}`}
                      target="_blank"
                      className="flex flex-col justify-center"
                    >
                      <h2 className="text-xl font-bold">
                        {video?.snippet?.channelTitle}
                      </h2>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {video && formatDate(video?.snippet?.publishedAt)}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-2/3 max-h-[calc(80svh-2rem)] overflow-y-auto whitespace-break-spaces">
                <h2 className="text-xl font-bold mb-2">Description</h2>
                <p className="text-sm text-gray-500 dark:text-gray-300 pb-5 lg:mb-0">
                  {video?.snippet?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
