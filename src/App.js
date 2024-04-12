import React, { useState } from "react";

import AddThoughtForm from "./AddThoughtForm";
import "./App.css";
import Thought from "./Thought";

function App() {
  const [thoughts, setThoughts] = useState([]);
  const addThought = (thought) => setThoughts((prev) => [thought, ...prev]);
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <AddThoughtForm addThought={addThought} />
      <main>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
