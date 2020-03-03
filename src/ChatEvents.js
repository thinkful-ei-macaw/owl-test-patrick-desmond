import React from "react";

function ChatEvents(props) {
  return (
    <div>
      <p>{props.type}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default ChatEvents;
