import React from "react";

function Participant(props) {
  return (
    <div>
      <img src={props.imgsrc} alt='profile pic'></img>
      <p>{props.name}</p>
      <p>{props.inSession ? "In session" : "Not in session"}</p>
      <p>{props.onStage ? "On Stage" : "Not on Stage"}</p>
    </div>
  );
}

export default Participant;
