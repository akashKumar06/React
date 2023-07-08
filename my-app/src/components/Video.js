import './Video.css'

function Video({title,channel="Coder Dost",views,time}) {
  return (
    <div className="container">
      <div className="pic"></div>
      <img src="https://loremflickr.com/200/160" alt="Kuch tho hai" />
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
    </div>
  );
}

export default Video;
