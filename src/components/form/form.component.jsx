import React from "react";
import { Submit, TextField } from "./input";
import { List } from "../list";

class Form extends React.Component {
  constructor() {
    super();
    this.state = { element: "", elementList: [], isDisabled: true };
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(event) {
    const isDisabled =
      !event.target.value || !!event.target.value.match(/(^|\s)реакт($|\s)/i);
    this.setState({ [event.target.name]: event.target.value, isDisabled });
  }

  submitHandler(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      elementList: [...prevState.elementList, prevState.element],
      element: "",
      isDisabled: true,
    }));
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <TextField
            name="element"
            label="Элемент списка"
            value={this.state.element}
            onChange={this.handleChange}
          />
          <Submit disabled={this.state.isDisabled} />
        </form>
        <List elementList={this.state.elementList} />
      </>
    );
  }
}

export { Form };
