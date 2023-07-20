import "./AddVideos.css";
import { useState,useEffect,useRef } from "react";
import useVideoDispatch from "../hooks/VideoDispatch";
const initialState = {
  time: "3 months ago",
  channel: "Akash Kumar",
  verified: "true",
  title:'',
  views:''
};

function AddVideo({editableVideo }) {
  const [video, setVideo] = useState(initialState);
  const inputRef = useRef(null);
  const dispatch = useVideoDispatch();
  
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
    inputRef.current.focus();
  },[editableVideo]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
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
