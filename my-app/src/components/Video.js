import "./Video.css";

function Video({ id,title, channel = "Coder Dost", views, time, verified,children}) {
  return (
    <div className="container">
      <div className="pic"></div>
      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Kuch tho hai" />
      <div className="title">{title}</div>
      <div className="channel">{channel}{verified && '✅'}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Video;
