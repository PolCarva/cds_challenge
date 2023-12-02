import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getVideoById } from "../api";
import MainVideo from "../components/MainVideo";
import { createMarkup } from "../utils";

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

      <div className="w-full lg:w-5/6 mx-auto">
        <div className="grid grid-cols-6 mx-auto gap-5 w-full h-[70vh]">
          <div className="col-span-6">
            <h1
              className="text-2xl font-bold min-h-[4rem] line-clamp-2 w-4/6"
              dangerouslySetInnerHTML={createMarkup(video?.snippet.title)}
            />
          </div>
          <div className="col-span-4">
            <img
              className="w-full aspect-video rounded-xl select-none"
              src={video.snippet.thumbnails.maxres.url}
              alt=""
            />
          </div>
          <div className=" col-span-2">
            <h2>Description</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
