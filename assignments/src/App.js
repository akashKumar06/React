import "./App.css";
import image from "./image.jpg";
import Form from './Form'
function App() {
  let status = false;

  function handleMouseOver(){
    status = !status;
  }

  function handleDoubleClick() {
    alert("You double clicked me");
  }

  function handleClick() {
    console.log("you clicked me");
  }

  function handleFocus() {
    console.log("focused on textbox");
  }

  function handleBlur() {
    console.log("out of the textbox");
  }
  return (
    <div className="App">
      <img
        src={image}
        alt="birds"
        className='img-style'
        onMouseOver={handleMouseOver}
      ></img>
      <form>
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
        <button>SUBMIT</button>
      </form>
      <Form></Form>
      <button onDoubleClick={handleDoubleClick} onClick={handleClick}>
        Click Me
      </button>
      <p
        onCopy={() => {
          alert("something is copied");
        }}
        onCut={() => {
          alert("something is cut");
        }}
        onPaste={() => {
          alert("something is pasted");
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem a qui
        debitis est suscipit veniam, molestias nihil? Ipsa placeat ipsam at
        eligendi eveniet! Ipsam labore dolore quas assumenda dignissimos
        recusandae?
      </p>
    </div>
  );
}

export default App;
