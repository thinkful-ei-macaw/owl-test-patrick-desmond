import React from "react";
import STORE from "./store";
import Participant from "./Participant";

function Stage(props){
    return (
        <section className='participantList'>
          {props.participants.map(person => {
            return (
              <Participant
                name={person.name}
                imgsrc={person.avatar}
                onStage={person.onStage}
              />
            );
          })}
        </section>
    );}

export default Stage;