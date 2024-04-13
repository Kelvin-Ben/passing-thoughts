import React, { useState } from "react";

import AddThoughtForm from "./AddThoughtForm";
import "./App.css";
import Thought from "./Thought";

function App() {
  const [thoughts, setThoughts] = useState([]);
  const addThought = (thought) => setThoughts((prev) => [thought, ...prev]);
  const removeThought = (thoughtIdRemove) =>
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdRemove)
    );
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <AddThoughtForm addThought={addThought} />
      <main>
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              key={thought.id}
              thought={thought}
              removeThought={removeThought}
            />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
