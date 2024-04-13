import React, { useEffect } from "react";

const Thought = (props) => {
  const { thought, removeThought } = props;
  function handleClick() {
    removeThought(thought.id);
  }
  useEffect(() => {
    const remainingTime = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id);
    }, remainingTime);
    return () => {
      clearTimeout(timeout);
    };
  }, [thought]);
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
