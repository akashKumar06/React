import Video from "./components/Video";
import "./App.css";
import videoDB from "./data/data.js";
import PlayButton from "./components/PlayButton";
import { useState } from "react";
import AddVideos from "./components/AddVideos";
function App({ addVideos }) {
  const [videos, setVideos] = useState(videoDB);

  function handleAddVideo(video) {
    setVideos([...videos, video]);
  }

  return (
    <div className="App">
      <AddVideos onAddVideo={handleAddVideo} />
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
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
    </div>
  );
}

export default App;
