import "./AddVideos.css";
import { useState,useEffect } from "react";

const initialState = {
  time: "3 months ago",
  channel: "Akash Kumar",
  verified: "true",
  title:'',
  views:''
};

function AddVideo({ onAddVideo, updateVideo, editableVideo }) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      updateVideo(video);
    } else {
      onAddVideo(video);
    }
    
    setVideo(initialState);
  }

  function handleChange(e) {
    e.stopPropagation();
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(()=> {
    if(editableVideo){
      setVideo(editableVideo);
    }

  },[editableVideo]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
        value={video.title}
      />
      <input
        type="text"
        name="views"
        placeholder="views"
        onChange={handleChange}
        value={video.views}
      />
      <button> {editableVideo ? 'Edit': 'Add'} Video</button>
    </form>
  );
}

export default AddVideo;
