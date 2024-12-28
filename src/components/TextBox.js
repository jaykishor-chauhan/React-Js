import React from 'react'
import { useState } from "react"

export default function TextBox(props) {
  
  const [text, setText] = useState("");

  const handleOnChange = (evnt)=>{
    setText(evnt.target.value);
  }
  
  const converToUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text has successfully converted to uppercase.', 'success');
  }

  const converToLowercase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text has successfully converted to lower case.', 'success');
  }

  const restText = ()=>{
    setText("");
    props.showAlert('Text has successfully reset.', 'success');
  }
  
  const copyText = ()=>{
    let cpyText = document.getElementById('textBox');
    cpyText.select();
    navigator.clipboard.writeText(cpyText.value);
    props.showAlert('Text has successfully copied to clipboard.', 'success');
  }

  const removeExtraSpacr = ()=>{
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert('Extra space has been successfully removed from text.', 'success');
  }

  
  return (
    <div>
      <div className={`mb-3 container mt-3 text-${props.mode === 'light'?'dark' : 'light'}`}>
        <h2 className={`text-${props.mode === 'light'?'dark' : 'light'}`}>{props.heading}</h2>
        <textarea 
          className="form-control" 
          id="textBox" 
          placeholder='Enter your text here..' 
          value={text} 
          onChange={handleOnChange} 
          rows="8">  
        </textarea>
        <button className='btn btn-primary m-2' onClick={converToUppercase}>Convert to Uppercase</button>
        <button className='btn btn-primary m-2' onClick={converToLowercase}>Convert to Lowercase</button>
        <button className='btn btn-primary m-2' onClick={restText}>Reset</button>
        <button className='btn btn-primary m-2' onClick={copyText}>Copy Text</button>
        <button className='btn btn-primary m-2' onClick={removeExtraSpacr}>Remove extra space</button>
        <h2 className='mt-3'>Text Summary</h2>
        <p>Words: {text.split(" ").length} and Character: {text.length}</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text:'Enter some text for preview.'}</p>
      </div>
    </div>
  )
}
