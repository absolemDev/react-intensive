import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <h2>Список</h2>
        {this.props.elementList.length ? (
          <ol>
            {this.props.elementList.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ol>
        ) : (
          <p>Список пуст</p>
        )}
      </>
    );
  }
}

export { List };
