import { useEffect } from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";
import axios from "axios";
import useVideoDispatch from "../hooks/VideoDispatch";

function VideoList({ editVideo }) {
  const url = "https://my.api.mockaroo.com/video.json?key=81ac27d0";

  const videos = useVideos();
  const dispatch = useVideoDispatch();

  async function handleClick() {
    const res = await axios.get(url);
    console.log("Get Videos", res.data);
    dispatch({ type: "LOAD", payload: res.data });
  }

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      console.log("Get Videos", res.data);
      dispatch({ type: "LOAD", payload: res.data });
    }
    getVideos();
  }, [dispatch]);

  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => {
              console.log("Playing", video.title);
            }}
            onPause={() => console.log("Paused", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <button onClick={handleClick}>Get Videos</button>
    </>
  );
}

export default VideoList;
