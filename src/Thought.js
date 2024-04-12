import React from "react";

const Thought = (props) => {
  const { thought } = props;
  return (
    <li className="Thought">
      <button aria-label="Remove thought" className="remove-button">
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
};

export default Thought;
