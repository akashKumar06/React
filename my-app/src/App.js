import "./App.css";
import AddVideos from "./components/AddVideos";
import VideoList from './components/VideoList';
import React,{useState}from 'react'

import videoDB from "./data/data.js";

function App() {
  const [videos, setVideos] = useState(videoDB);

  function handleAddVideo(video) {
    setVideos([...videos, video]);
  }
  
  return (
    <div className="App">
      <AddVideos onAddVideo={handleAddVideo} />
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
