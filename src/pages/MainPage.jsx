import { useEffect, useState } from "react";
import { getVideos } from "../api/index.jsx";
import MainVideo from "../components/MainVideo.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Header from "../components/Header.jsx";
import RecommendedVideosContainer from "../components/RecommendedVideosContainer.jsx";
import { increase } from "../store/slices/videoCounterSlice.jsx";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getVideosByQuery = async (query) => {
    const results = await getVideos(query);
    setVideos(
      results.items.filter((video) => video.id.kind === "youtube#video")
    );
    setSelectedVideo(results.items[0]);
  };

  const handleSearch = () => {
    if (!searchValue) {
      return;
    }
    getVideosByQuery(searchValue);
  };

  useEffect(() => {
    getVideosByQuery("CodigoDelSur - Mobile & Web App Development Company");
  }, []);

  return (
    <div className="w-full h-fit px-5 flex flex-col gap-5">
      <Header>
        <Link to="/" className="hover:scale-110 hover:rotate-12 transition-all ease-in-out">
          <img
            src="/img/logo.png"
            alt="Código del Sur Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>
        <SearchBar
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div>Likes</div>
      </Header>
      <div className="flex flex-col lg:flex-row gap-5 justify-center w-full flex-1 min-h-[calc(80svh-1.25rem)] pb-2">
        <MainVideo video={selectedVideo} />
        <RecommendedVideosContainer
          videos={videos}
          setSelectedVideo={setSelectedVideo}
        />
      </div>
    </div>
  );
};

export default MainPage;
