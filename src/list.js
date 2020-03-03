import React from "react";
import Participant from "./Participant";

function List(props) {
  return (
    <section className='participantList'>
      {props.participants.map(person => {
        return (
          <Participant
            name={person.name}
            imgsrc={person.avatar}
            inSession={person.inSession}
          />
        );
      })}
    </section>
  );
}

export default List;
