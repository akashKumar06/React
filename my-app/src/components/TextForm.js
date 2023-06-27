import React,{useState} from 'react';



const TextForm = (props) => {
    const [text, setText] = useState('Enter text here');

    const handleUpperCaseClick = (str)=>{
        console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText); 
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
        </div>            
    )

}

export default TextForm;
