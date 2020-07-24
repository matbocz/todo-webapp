import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  // Get active and completed tasks
  const active = props.tasks
    .filter((task) => task.text.indexOf(props.search) !== -1)
    .filter((task) => task.active);
  const done = props.tasks
    .filter((task) => task.text.indexOf(props.search) !== -1)
    .filter((task) => !task.active);

  // Sort active and completed tasks
  active.sort((a, b) => b.id - a.id);
  done.sort((a, b) => b.doneDate - a.doneDate);

  // Create new active and completed task objects
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      remove={props.remove}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      change={props.change}
      remove={props.remove}
    />
  ));

  return (
    <>
      {/* Show all active tasks */}
      <ul className="list-group w-100 mt-3">{activeTasks}</ul>

      {/* Show the last 5 tasks completed */}
      <h3 className="mt-3">Completed tasks: {done.length}</h3>
      <ul className="list-group w-100">{doneTasks.slice(0, 5)}</ul>
      {done.length > 5 && (
        <p>There are {done.length - 5} more completed tasks</p>
      )}
    </>
  );
};

export default TaskList;
