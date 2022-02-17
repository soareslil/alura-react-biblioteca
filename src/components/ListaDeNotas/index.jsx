import React from "react";
import "./estilo.css";
import { FormularioCadastro } from "../FormularioCadastro";

export const ListaDeNotas = () => {
  return (
    <ul>
      {Array.of("Trabalho", "Estudos", "Casa").map((categoria, index) => {
        return (
          <li key={index} className="card-nota">
            <div>{categoria}</div>

            <FormularioCadastro />
          </li>
        );
      })}
    </ul>
  );
};
