import React from "react";
import ChatEvents from "./ChatEvents";

function Chat(props) {
  return (
    <section className='chat-events'>
      {props.events.map(event => {
        return (
          <ChatEvents
            type={event.type}
            message={event.message}
            timestamp={event.timestamp}
          />
        );
      })}
    </section>
  );
}

export default Chat;
