import React from "react";
import style from "./input.module.css";

class Submit extends React.Component {
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
