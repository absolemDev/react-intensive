import React from "react";
import style from "./input.module.css";

class TextField extends React.Component {
  componentDidMount() {
    console.log(`Field ${this.props.name} did mount`);
  }

  componentDidUpdate() {
    console.log(`Field ${this.props.name} did update`);
  }

  componentWillUnmount() {
    console.log(`Field ${this.props.name} will unmount`);
  }

  render() {
    return (
      <div className={style.wrapper}>
        <label htmlFor={this.props.name} className={style.label}>
          {this.props.label}
        </label>
        <input
          id={this.props.name}
          name={this.props.name}
          type="text"
          value={this.props.value}
          onChange={this.props.onChange}
          className={style.textField}
        />
      </div>
    );
  }
}

export { TextField };
