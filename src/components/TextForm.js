import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Text Here");

    return (
        <div className="container mt-5">
            <h2 className="mb-4">{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" name="description" onChange={handleOnChange} value={text} cols="30" rows="10"></textarea>
            </div>
            <button type="submit" className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
        </div>
    )
}
