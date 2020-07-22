import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/materia/bootstrap.min.css";

import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import TaskList from "./TaskList";
import AddTask from "./AddTask";

class ToDo extends Component {
  counter = 4;

  state = {
    tasks: [
      {
        id: 0,
        text: "Task 1",
        important: false,
        date: "2019-10-12",
        doneDate: null,
        active: true,
      },
      {
        id: 1,
        text: "Task 2",
        important: true,
        date: "2019-12-01",
        doneDate: null,
        active: true,
      },
      {
        id: 2,
        text: "Task 3",
        important: false,
        date: "2020-02-10",
        doneDate: "2020-04-02",
        active: false,
      },
      {
        id: 3,
        text: "Task 4",
        important: true,
        date: "2020-05-01",
        doneDate: "2020-06-20",
        active: false,
      },
    ],
  };

  handleRemove = (id) => {
    let tasks = [...this.state.tasks];

    tasks = tasks.filter((task) => task.id !== id);

    this.setState({
      tasks,
    });
  };

  handleAdd = (text, important, date) => {
    const task = {
      id: this.counter,
      text,
      important,
      date,
      doneDate: null,
      active: true,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  handleChangeStatus = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = new Date().getTime();
      }
    });

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="container">
        <AddTask add={this.handleAdd} />
        <TaskList
          tasks={this.state.tasks}
          change={this.handleChangeStatus}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default ToDo;
