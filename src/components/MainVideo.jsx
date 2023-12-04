import { Link } from "react-router-dom";
import { createMarkup } from "../utils";
import { useDispatch } from "react-redux";
import { increase } from "../store/slices/videoCounterSlice";


const MainVideo = ({ video }) => {
  const dispatch = useDispatch();

  const onClickDetails = () => {
    dispatch(increase());
  };
  return (
    <div className="w-full lg:w-1/2 h-fit flex flex-col gap-5 lg:gap-0 justify-between">
      <iframe
        className="w-full aspect-video rounded-xl select-none"
        src={`https://www.youtube.com/embed/${video?.id?.videoId}`}
        title={video?.snippet?.title}
        allow="autoplay; encrypted-media"
      />

      <div className="flex flex-col gap-5 lg:gap-2">
        <h1
          className="text-2xl font-bold min-h-[4rem] line-clamp-2"
          dangerouslySetInnerHTML={createMarkup(video?.snippet?.title)}
        />
        <Link
          to={`/detail/${video?.id?.videoId}`}
          className="py-3 w-full lg:w-1/3 self-end text-xl lg:text-base text-center bg-primary hover:bg-primary-hover text-white font-bold rounded-md float-right shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
          onClick={onClickDetails}
        >
          Video Details
        </Link>
      </div>
    </div>
  );
};

export default MainVideo;
