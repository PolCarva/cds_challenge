import React from "react";

const MainVideo = ({ video }) => {
  return (
    <div className="w-full md:w-1/2 h-fit">
      <iframe
        className="w-full aspect-video rounded-xl"
        src={`https://www.youtube.com/embed/${video?.id.videoId}`}
        title={video?.snippet.title}
      />
      <div className="mt-2">
        <h1 className="text-2xl font-bold">{video?.snippet.title}</h1>
      </div>
    </div>
  );
};

export default MainVideo;
