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
      </div>
    </main>
  );
}

export default App;
