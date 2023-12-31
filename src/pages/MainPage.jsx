import { useEffect, useState } from "react";
import { getVideos } from "../api/index.jsx";

import MainVideo from "../components/MainVideo.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Header from "../components/Header.jsx";
import RecommendedVideosContainer from "../components/RecommendedVideosContainer.jsx";
import { Link } from "react-router-dom";
import MainPageSkeleton from "../components/Skeletons/MainPageSkeleton.jsx";
import toast from "react-hot-toast";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getVideosByQuery = async (query) => {
    try {
      const results = await getVideos(query);
      setVideos(
        results.items.filter((video) => video.id.kind === "youtube#video")
      );
      setSelectedVideo(results.items[0]);
    } catch (error) {
      console.error(error);
      error.message === "API Quota exceeded"
        ? toast.error("API Quota exceeded, please try again later")
        : toast.error("Error getting videos");
    }
  };

  const handleSearch = () => {
    if (!searchValue) {
      return;
    }
    getVideosByQuery(searchValue);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      getVideosByQuery("CodigoDelSur - Mobile & Web App Development Company");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="w-full h-fit px-5 flex flex-col gap-5 dark:bg-gray-800">
      <Header>
        <Link
          to="/"
          className="hover:scale-110 hover:rotate-12 transition-all ease-in-out"
        >
          <img
            src="/img/logo.png"
            alt="Código del Sur Logo"
            className="w-12 h-12 object-contain select-none"
          />
        </Link>
        <SearchBar
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full h-full flex-1 pb-2 dark:bg-gray-800 dark:text-white">
        {isLoading ? (
          <MainPageSkeleton />
        ) : (
          <>
            <MainVideo video={selectedVideo} />
            <RecommendedVideosContainer
              selectedVideoId={selectedVideo?.id?.videoId}
              videos={videos}
              setSelectedVideo={setSelectedVideo}
            />
          </>
        )}
      </div>
    </div>
  );
};
export default MainPage;
