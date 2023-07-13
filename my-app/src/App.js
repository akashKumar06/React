import Video from "./components/Video";
import "./App.css";
import videos from "./data/data.js";
import PlayButton from "./components/PlayButton";
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div>Hello</div>
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
              console.log("Playing",video.title);
            }}
            onPause={() => console.log("Paused",video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      <Counter/>
    </div>
  );
}

export default App;
