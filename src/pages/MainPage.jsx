import { useState } from "react";
import { getVideos } from "../api/index.jsx";
import MainVideo from "../components/MainVideo.jsx";
import RecommendedVideos from "../components/RecommendedVideos.jsx";
import SearchBar from "../components/SearchBar.jsx";
import Header from "../components/Header.jsx";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({
    id: { videoId: "Yppae7mKmcw" },
    snippet: { title: "CodigoDelSur - Mobile & Web App Development Company" },
  });

  const handleSearch = async () => {
    if (!searchValue) {
      return;
    }
    const results = await getVideos(searchValue);
    setVideos(results.items);
    setSelectedVideo(results.items[0]);
  };

  return (
    <div className="w-full h-fit px-5 flex flex-col gap-5">
      <Header>
        <SearchBar
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </Header>
      {/* -- START Main Content -- */}
      <div className="flex flex-col md:flex-row gap-5 justify-center w-full flex-1">
        <MainVideo video={selectedVideo} />
        <div className="w-full aspect-video md:w-1/3 flex flex-col bg-white gap-5 overflow-visible md:overflow-y-auto">
          {videos.slice(1).map((video) => {
            return (
              <RecommendedVideos
                key={video.id.videoId}
                video={video}
                setSelectedVideo={setSelectedVideo}
              />
            );
          })}
        </div>
      </div>
      {/* --END Main Content -- */}
    </div>
  );
};

export default MainPage;
