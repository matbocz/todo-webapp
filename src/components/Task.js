import React from "react";

const Task = (props) => {
  const { id, text, important, date, doneDate, active } = props.task;

  if (active) {
    return (
      <li style={important ? { color: "red" } : null}>
        {text} {date}
        <button onClick={() => props.change(id)}>V</button>
        <button onClick={() => props.remove(id)}>X</button>
      </li>
    );
  } else {
    const done = new Date(doneDate).toLocaleString();

    return (
      <li>
        {text} {done}
        <button onClick={() => props.remove(id)}>X</button>
      </li>
    );
  }
};

export default Task;
