import Video from "./components/Video";
import "./App.css";
import videos from './data/data.js'

function App() {
  return (
    <div className="App">
      <div>Hello</div>
      {videos.map(video => <Video
        key={video.id}
        title={video.title}
        views={video.views}
        time={video.time}
        channel={video.channel}
        verified={video.verified}
        id={video.id}
      />)}
    </div>
  );
}

export default App;
