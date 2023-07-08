import Video from "./components/Video";
import "./App.css";

function App() {
  let obj = {
    title: "React JS Tutorial",
    views: "10K",
    time: "5 months ago",
    channel: "Akash Kumar",
  };

  return (
    <div className="App">
      <div>Hello</div>
      <Video {...obj}></Video>
      <Video title="Node JS Tutorial" views="20K" time="1 year ago"></Video>
      <Video
        title="Mongo DB Tutorial"
        views="20K"
        time="1 year ago"
        channel="Akash Kumar"
      ></Video>
    </div>
  );
}

export default App;
