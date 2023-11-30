import { Link } from "react-router-dom";
import { createMarkup } from "../utils";

const MainVideo = ({ video }) => {
  return (
    <div className="w-full lg:w-1/2 h-fit">
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${video?.id.videoId}`}
        title={video?.snippet.title}
        allow="autoplay; encrypted-media"
      />
      <div className="mt-2">
        {/* Usar dangerouslySetInnerHTML con precaución */}
        <h1
          className="text-2xl font-bold"
          dangerouslySetInnerHTML={createMarkup(video?.snippet.title)}
        ></h1>
        <Link
          to={`/detail/${video?.id.videoId}`}
          className="mt-5 bg-primary hover:bg-primary-hover text-white font-bold py-2 px-4 rounded-md float-right shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
        >
          Video Details
        </Link>
      </div>
    </div>
  );
};

export default MainVideo;
