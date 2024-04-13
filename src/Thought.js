import React from "react";

const Thought = (props) => {
  const { thought, removeThought } = props;
  function handleClick() {
    removeThought(thought.id);
  }
  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
};

export default Thought;
