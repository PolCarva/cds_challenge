import axios from "axios";
import { BASE_URL } from "../stables";

export const getVideos = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 10,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      q: query,
    },
  });
  console.log(response.data);
  return response.data;
};
