import "./App.css";
import AddVideos from "./components/AddVideos";
import VideoList from './components/VideoList';
import React,{useState}from 'react'

import videoDB from "./data/data.js";

function App() {
  const [videos, setVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null);

  function handleAddVideo(video) {
    setVideos([
      ...videos,
      {...video, id: videos.length+1}
    ]);
  }

  function deleteVideo(id){
    setVideos(videos.filter((video)=> (video.id !== id)));
    console.log(id);
  }

  function editVideo(id){
    setEditableVideo(videos.find((video) => video.id === id));
  }

  function updateVideo(video){
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index,1,video);
    setVideos(newVideos);
  }

  return (
    <div className="App">
      <AddVideos onAddVideo={handleAddVideo} editableVideo={editableVideo} updateVideo={updateVideo}/>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}/>
    </div>
  );
}

export default App;
