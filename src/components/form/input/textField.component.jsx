import React from "react";
import style from "./input.module.css";

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.textFieldRef = React.createRef();
    this.focusTextField = this.focusTextField.bind(this);
  }

  focusTextField() {
    this.textFieldRef.current.focus();
  }

  render() {
    return (
      <div className={style.wrapper}>
        <label htmlFor={this.props.name} className={style.label}>
          {this.props.label}
        </label>
        <div className={style.inputGroup}>
          <input
            id={this.props.name}
            name={this.props.name}
            ref={this.textFieldRef}
            type="text"
            value={this.props.value}
            onChange={this.props.onChange}
            className={style.textField}
          />
          <button type="button" onClick={this.focusTextField}>
            Фокус
          </button>
        </div>
      </div>
    );
  }
}

export { TextField };
