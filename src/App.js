import React from "react";
import style from "./App.module.css";
import { Form } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <h1 className={style.title}>React Интенсив</h1>
        <Form />
      </div>
    );
  }
}

export default App;
