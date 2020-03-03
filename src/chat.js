import React from "react";
import STORE from "./store";
import ChatEvents from "./ChatEvents";
import Participant from "./Participant";

function Chat(props){
    return (
        <section className='chat-events'>
          {props.participants.map(person => {
            return (
              <Participant
                name={person.name}
              
              ChatEvents
               type={person.type}
               message={person.message}
            //    timestamp={person.timestamp}
            />
            );
          })}
        </section>
    );}

export default Chat;
