import axios from "axios";
import jsonpAdapter from "axios-jsonp";

export const searchVideos = async (query) => {
  const keys = import.meta.env.VITE_YOUTUBE_API_KEY_LIST.split(",");

  for (const key of keys) {
    try {
      const { data } = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          maxResults: 10, // Adjust the number of results as needed
          q: query,
          type: "video",
          key: key,
        },
      });
      console.log(data);
      return data?.items?.map((item) => mapVideoMeta(item));
    } catch (error) {
      if (error?.response?.status === 403) {
        continue;
      }
      throw error;
    }
  }
  throw new Error("No API keys left to try");
};

export const suggest = (term) => {
  const GOOGLE_AC_URL = `https://clients1.google.com/complete/search`;
  return axios({
    // A YT undocumented API for auto suggest search queries
    url: GOOGLE_AC_URL,
    adapter: jsonpAdapter,
    params: {
      client: "youtube",
      hl: "en",
      ds: "yt",
      q: term,
    },
  }).then((res) => {
    console.log("jsonp results >> ", res);
    if (res.status !== 200) {
      throw Error("Suggest API not 200!");
    }
    return res.data[1].map((item) => item[0]);
  });
};

export const getVideoInfo = async (videoId) => {
  const response = await axios.get("https://www.youtube.com/oembed", {
    params: {
      url: `https://www.youtube.com/watch?v=${videoId}`,
      format: "json",
    },
  });

  return { ...response.data, id: videoId };
};

export const mapVideoMeta = (video) => ({
  id: video?.id?.videoId ?? video?.id,
  title: video?.snippet?.title ?? video?.title,
  // description: video.snippet.description,
  // type: video.id.kind,
  thumbnail_url: video?.snippet?.thumbnails?.high?.url ?? video?.thumbnail_url,
  author_name: video?.snippet?.channelTitle ?? video?.author_name,
});

// get next video suggestion
export const getNextVideo = async (videoId) => {
  const keys = import.meta.env.VITE_YOUTUBE_API_KEY_LIST.split(",");

  for (const key of keys) {
    try {
      const { data } = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: {
          key: key,
          part: "snippet",
          chart: "mostPopular",
          maxResults: 10,
          relatedToVideoId: videoId,
        },
      });
      return data?.items?.map((item) => mapVideoMeta(item));
    } catch (error) {
      console.error("Error fetching related videos", error);
    }
  }
};
