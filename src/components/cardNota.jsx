import React, { Component } from "react";

export class CardNota extends Component {
  render() {
    return (
      <ul>
        {Array.of("Trabalho", "Estudos", "Casa").map((categoria) => {
          return (
            <li>
              <div>{categoria}</div>
              <CardNota />
            </li>
          );
        })}
      </ul>
    );
  }
}
