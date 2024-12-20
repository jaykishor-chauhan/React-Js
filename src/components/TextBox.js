import React from 'react'
import { useState } from "react"

export default function TextBox(props) {
  
  const handleOnChange = (evnt)=>{
    setText(evnt.target.value);
  }
  
  const converToUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const [text, setText] = useState('Enter your text here..');
  
  return (
    <div>
      <div className="mb-3 container mt-3">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>
        <button className='btn btn-primary m-2' onClick={converToUppercase}>Convert to Uppercase</button>
      </div>
    </div>
  )
}
