import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container mt-5">
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" name="description" onChange={handleOnChange} value={text} cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-danger mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview</h3>
                <pre>
                    {text}
                </pre>
            </div>
        </>
    )
}
