import React,{useState} from 'react';



const TextForm = (props) => {
    const [text, setText] = useState('Enter text here');

    const handleUpperCaseClick = ()=>{
        console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const handleLowerCaseClick = () => {
        console.log("lowercase clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
        </div>            
    )

}

export default TextForm;
