import React from "react";

function ChatEvents(props) {
  let ts = new Date(props.timestamp);
  let ampm = ts.getHours() >= 12 ? "pm" : "am";
  let time = `${ts.getHours() % 12}:${ts.getMinutes()} ${ampm}`;
  console.log(time);
  return (
    <div>
      <p>{props.type}</p>
      <p>{props.message}</p>
      <p>{time}</p>
    </div>
  );
}

export default ChatEvents;
