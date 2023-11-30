import axios from "axios";
import { BASE_URL } from "../stables";
import { data } from "../data/data";

export const getVideos = async (query) => {
  return data;
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: "snippet",
      maxResults: 10,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      q: query,
    },
  });
  return response.data;
};

export const getVideoById = async (id) => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: "snippet",
      maxResults: 10,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      id,
    },
  });
  console.log(response.data);
  return response.data;
}