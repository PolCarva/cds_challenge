import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getVideoById } from "../api";
import MainVideo from "../components/MainVideo";

const DetailPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function getVideo() {
      const video = await getVideoById(id);
      setVideo(video.items[0]);
      console.log(video);
    }

    getVideo();
  }, []);

  return (
    <div className="w-full h-fit px-5 flex flex-col gap-5">
      <Header>
        <div className="flex gap-5 hover:scale-110 hover:rotate-12 transition-all ease-in-out">
          <Link className="cursor-pointer relative group" to={-1}>
            <img
              src="/img/hex.png"
              alt="Código del Sur Logo"
              className="w-12 h-12 object-contain"
            />
            <FaAngleLeft className="absolute group-hover:-rotate-12 transition-all ease-in-out text-white w-6 h-6 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
          </Link>
        </div>
      </Header>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full flex-1 min-h-[calc(80svh-1.25rem)] pb-2">
        <MainVideo video={video} isDetailPage={true} />
        <div className="w-1/3">
          <h1 className="text-2xl font-bold mb-5">Video Details</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="text-sm text-gray-500">Description</span>
              <span className="text-lg">{video?.snippet.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
