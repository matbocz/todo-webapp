import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const iconFaPlusCircle = <FontAwesomeIcon icon={faPlusCircle} />;

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
      <>
        <div className="form-row">
          <div className="col-sm-8">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add new task"
                value={this.state.text}
                onChange={this.handleTextChange}
              />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="form-group">
              <input
                type="date"
                className="form-control"
                value={this.state.date}
                onChange={this.handleDateChange}
                min={this.todayDate}
                max={this.maxDate}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-sm-8">
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="importantCheckbox"
                checked={this.state.important}
                onChange={this.handleStatusChange}
              />
              <label className="form-check-label" htmlFor="importantCheckbox">
                Important
              </label>
            </div>
          </div>

          <div className="col-sm-4">
            <button
              className="btn btn-primary w-100"
              onClick={this.handleTaskAdd}
            >
              {iconFaPlusCircle}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default AddTask;
