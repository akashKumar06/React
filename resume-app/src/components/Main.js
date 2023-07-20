import image from "../data/img.jpg";
import "../styles/Main.css";

function Main({data}) {
  return (
    <main>
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='main-content'>
        <h3>Frontend-Developer</h3>
        <h1>{data.name}</h1>
        <h2>{data.phone}</h2>
        <h2>{data.email}</h2>
        <p>{data.address}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          necessitatibus quis modi blanditiis labore est similique delectus
          eaque. Ratione non, quod beatae voluptates eius alias vero quae?
          Distinctio, expedita nostrum?
        </p>
        <div className='main-button'>
          <button>Download CV</button>
          <button>Contact</button>
        </div>
      </div>
    </main>
  );
}

export default Main;
