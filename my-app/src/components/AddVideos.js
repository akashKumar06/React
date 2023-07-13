import "./AddVideos.css";
import { useState } from "react";

function AddVideo({onAddVideo}) {
  const [video, setVideo] = useState({
    time: "3 months ago",
    channel: "Akash Kumar",
    verified: "true",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onAddVideo(video);
  }

  function handleChange(e) {
    e.stopPropagation();
    setVideo({
      ...video,
      id:Math.floor((Math.random()*100 + 1)),
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="views"
        placeholder="views"
        onChange={handleChange}
      />
      <button>
        Add Videos
      </button>
    </form>
  );
}

export default AddVideo;
