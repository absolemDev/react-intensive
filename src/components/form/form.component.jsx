import React from "react";
import { Submit, TextField } from "./input";
import style from "./form.module.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("Form did mount");
  }

  componentDidUpdate() {
    console.log("Form did update");
  }

  componentWillUnmount() {
    console.log("Form will unmount");
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    alert(
      `${this.state.firstName}${
        this.state.lastName ? " " + this.state.lastName : ""
      }, приветствуем тебя на React Интенсиве!`
    );
  }

  render() {
    return (
      <form onSubmit={this.submitHandler.bind(this)} className={style.form}>
        <TextField
          name="firstName"
          label="Имя"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <TextField
          name="lastName"
          label="Фамилия"
          value={this.state.lastName}
          onChange={this.handleChange}
        />
        <Submit disabled={!this.state.firstName} />
      </form>
    );
  }
}

export { Form };
