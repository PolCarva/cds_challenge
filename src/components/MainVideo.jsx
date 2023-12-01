import { Link } from "react-router-dom";
import { createMarkup } from "../utils";

const MainVideo = ({ video, isDetailPage = false }) => {
  return (
    <div
      className={`w-full lg:w-1/2 h-fit flex flex-col gap-5 ${
        isDetailPage && "flex-col-reverse"
      }`}
    >
      {isDetailPage ? (
        <img
          className="w-full h-full rounded-xl"
          src={`${video?.snippet.thumbnails.maxres.url}`}
          title={`${video?.snippet.title}`}
        />
      ) : (
        <iframe
          className="w-full aspect-video rounded-xl select-none"
          src={`https://www.youtube.com/embed/${video?.id.videoId}`}
          title={video?.snippet.title}
          allow="autoplay; encrypted-media"
        />
      )}

      <div>
        <h1
          className="text-2xl font-bold min-h-[4rem] line-clamp-2"
          dangerouslySetInnerHTML={createMarkup(video?.snippet.title)}
        />
        {!isDetailPage && (
          <Link
            to={`/detail/${video?.id.videoId}`}
            className="mt-5 py-3 px-6 w-full lg:w-auto text-xl lg:text-base text-center bg-primary hover:bg-primary-hover text-white font-bold rounded-md float-right shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            Video Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainVideo;
