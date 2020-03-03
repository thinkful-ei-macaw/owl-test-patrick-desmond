import React from "react";
import "./App.css";
import List from "./list";
import Stage from "./stage";
import Chat from "./chat";

function App(props) {
  return (
    <main className='App'>
      <header className='App-header'></header>
      <div className='person-list'>
        <List participants={props.store.participants} />
        <Chat events={props.store.chatEvents} />
      </div>
    </main>
  );
}

export default App;
