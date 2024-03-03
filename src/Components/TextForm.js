import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Clicked");
    setText("You have clicked on Upclick");
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1 style={{color: props.mode === "dark" ? 'white' : 'black'}}> {props.heading}</h1>
      <div className="mb-3">
        {/* <label for="myBox" className="form-label">
          Email Text Area
        </label> */}

        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </>
  );
}
