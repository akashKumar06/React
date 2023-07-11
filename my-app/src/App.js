import Video from "./components/Video";
import "./App.css";
import videos from "./data/data.js";
import PlayButton from "./components/PlayButton";

function App() {
  function handleClick(msg) {
    console.log(msg);
  }
  return (
    <div className="App" onClick={()=>console.log('app')}>
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
    </div>
  );
}

export default App;
