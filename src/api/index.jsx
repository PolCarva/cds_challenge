import axios from "axios";
import { BASE_URL } from "../stables";
import { channel, data, detail } from "../data/data";

export const getVideos = async (query) => {
  return data;
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: "snippet",
        maxResults: 10,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting videos:", error);
    throw error;
  }
};

export const getVideoById = async (id) => {
  return detail;
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: "snippet",
        maxResults: 10,
        key: import.meta.env.VITE_YOUTUBE_API_KEY,
        id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error getting video details:", error);
    throw error;
  }
};

export const getChannelData = async (channelId) => {
  return channel
  try {
    const response = await axios.get(
      `${BASE_URL}/channels?id=${channelId}&part=snippet&key=${
        import.meta.env.VITE_YOUTUBE_API_KEY
      }`
    );

    return response.data.items[0]?.snippet;
  } catch (error) {
    console.error("Error getting channel data:", error);
    throw error;
  }
};
