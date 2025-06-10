import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  }
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  }
  const handleClClick = () => {
    setText('');
    props.showAlert("Cleared text!!", "warning");
  }
  const handleOnChange = (event) => setText(event.target.value);

  const [text, setText] = useState('Enter Text Here');

  const textareaStyle = {
    backgroundColor: props.mode === 'dark' ? '#343a40' : '#f1f1f1',
    color: props.mode === 'dark' ? '#ffc107' : '#000000',
    border: 'none'
  };

  return (
    <>
      <div className='container'>
        <h1 className='mb-4 fw-b fs-2'>{props.heading}</h1>
        <textarea className="form-control fs-5" style={textareaStyle}
          id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>

        <button className="btn btn-warning mt-4 fs-5" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mt-4 fs-5 ms-3" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-warning mt-4 fs-5 ms-3" onClick={handleClClick}>
          Clear Text
        </button>
      </div>

      <div className="container mt-4">
        <h2>Your summary</h2>
        <p>{text.trim().split(/\s+/).length} words, {text.length} characters</p>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string.isRequired
}
