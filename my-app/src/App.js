import "./App.css";
import AddVideos from "./components/AddVideos";
import VideoList from "./components/VideoList";
import React, { useReducer, useState } from "react";

import videoDB from "./data/data.js";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode,setMode] = useState('dark-mode');

  // const themeContext = useContext(ThemeContext);


  function videoReducer(videos, action) {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((video) => video.id !== action.payload);
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, videoDB);

  // const [videos, setVideos] = useState(videoDB);

  // function handleAddVideo(video) {
  //   dispatch({type: 'ADD', payload: video})
  //   //action : {type: 'ADD', payload: video}
  //   // setVideos([
  //   //   ...videos,
  //   //   {...video, id: videos.length+1}
  //   // ]);
  // }

  // function deleteVideo(id)
  // {
  //   dispatch({type: 'DELETE', payload: id})
  //   // setVideos(videos.filter((video)=> (video.id !== id)));
  //   // console.log(id);
  // }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  // function updateVideo(video){
  //   dispatch({type:'UPDATE',payload:video});
  //   // const index = videos.findIndex((v) => v.id === video.id);
  //   // const newVideos = [...videos];
  //   // newVideos.splice(index,1,video);
  //   // setVideos(newVideos);
  // }

  return (
    <ThemeContext.Provider value={mode}>
      <button onClick={()=>{setMode(mode === 'dark-mode' ? 'light-mode':'dark-mode')}}>Mode</button>
      <div className={`App ${mode}`}>
        <AddVideos dispatch={dispatch} editableVideo={editableVideo} />
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
