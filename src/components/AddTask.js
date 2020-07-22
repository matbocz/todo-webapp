import React, { Component } from "react";

class AddTask extends Component {
  todayDate = new Date().toISOString().slice(0, 10);
  maxDate = this.todayDate.slice(0, 4) * 1 + 2;
  maxDate = this.maxDate + "-12-31";

  state = { text: "", date: this.todayDate, important: false };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleStatusChange = (e) => {
    this.setState({
      important: e.target.checked,
    });
  };

  handleTaskAdd = () => {
    const { text, important, date } = this.state;

    if (text.length > 2) {
      const add = this.props.add(text, important, date);
      if (add) {
        this.setState({ text: "", date: this.todayDate, important: false });
      }
    } else {
      alert("You must enter more than two characters");
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type="date"
          value={this.state.date}
          onChange={this.handleDateChange}
          min={this.todayDate}
          max={this.maxDate}
        />
        <input
          type="checkbox"
          checked={this.state.important}
          onChange={this.handleStatusChange}
        />
        <br />
        <button onClick={this.handleTaskAdd}>Add new task</button>
      </div>
    );
  }
}

export default AddTask;
