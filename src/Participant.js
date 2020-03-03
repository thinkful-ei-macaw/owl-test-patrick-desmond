import React from "react";
import "./list.css";

function Participant(props) {
  return (
    <div className='parts'>
      <img src={props.imgsrc} alt='profile pic'></img>
      <p>{props.name}</p>
      <p className='session'>
        {props.inSession ? "In session" : "Not in session"}
      </p>
      <p>{props.onStage ? "On Stage" : "Not on Stage"}</p>
    </div>
  );
}

export default Participant;
