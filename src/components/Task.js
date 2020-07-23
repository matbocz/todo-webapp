import React from "react";

const Task = (props) => {
  const { id, text, important, date, doneDate, active } = props.task;

  if (active) {
    return (
      <li
        className={
          important
            ? "list-group-item d-flex justify-content-between align-items-center text-info"
            : "list-group-item d-flex justify-content-between align-items-center"
        }
      >
        {text} <br />
        {date}
        <span>
          <button
            className="btn btn-success mr-1"
            onClick={() => props.change(id)}
          >
            V
          </button>
          <button
            className="btn btn-warning ml-1"
            onClick={() => props.remove(id)}
          >
            X
          </button>
        </span>
      </li>
    );
  } else {
    const doneTime = new Date(doneDate).toLocaleString();

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {text}
        <br />
        {doneTime}
        <button className="btn btn-warning" onClick={() => props.remove(id)}>
          X
        </button>
      </li>
    );
  }
};

export default Task;
