import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const iconFaCheckCircle = <FontAwesomeIcon icon={faCheckCircle} />;
const iconFaTimesCircle = <FontAwesomeIcon icon={faTimesCircle} />;

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
            {iconFaCheckCircle}
          </button>
          <button
            className="btn btn-warning ml-1"
            onClick={() => props.remove(id)}
          >
            {iconFaTimesCircle}
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
          {iconFaTimesCircle}
        </button>
      </li>
    );
  }
};

export default Task;
