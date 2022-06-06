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

    const clearTextClick = ()=> {
        setText("");
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
                    <textarea className="form-control" name="description" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#272a2b' : 'white', color: props.mode==='dark' ? 'white' : '#272a2b'}} value={text} cols="30" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-1" onClick={clearTextClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview</h3>
                <pre>
                    {text.length>0?text:"Enter Something in textbox above to preview here!"}
                </pre>
            </div>
        </>
    )
}
