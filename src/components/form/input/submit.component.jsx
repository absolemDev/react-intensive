import React from "react";
import style from "./input.module.css";

class Submit extends React.Component {
  componentDidMount() {
    console.log("Submit did mount");
  }

  componentDidUpdate() {
    console.log("Submit did update");
  }

  componentWillUnmount() {
    console.log("Submit will unmount");
  }

  render() {
    return (
      <input
        type="submit"
        disabled={this.props.disabled}
        className={style.submit}
      />
    );
  }
}

export { Submit };
