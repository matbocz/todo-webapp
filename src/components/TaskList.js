import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  // Get active and completed tasks
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

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
      <ul>{activeTasks}</ul>
      <hr />

      {/* Show the last 5 tasks completed */}
      <h2>Completed tasks: {done.length}</h2>
      <ul>{doneTasks.slice(0, 5)}</ul>
      {done.length > 5 && (
        <p>There are {done.length - 5} more completed tasks</p>
      )}
    </>
  );
};

export default TaskList;