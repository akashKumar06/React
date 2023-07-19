import "./AddVideos.css";
import { useState,useEffect } from "react";

const initialState = {
  time: "3 months ago",
  channel: "Akash Kumar",
  verified: "true",
  title:'',
  views:''
};

function AddVideo({ dispatch, editableVideo }) {
  const [video, setVideo] = useState(initialState);
  // const [editStatus,setEditStatus] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatch({type:'UPDATE',payload:video});
    } else {
      dispatch({type: 'ADD', payload: video})
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
