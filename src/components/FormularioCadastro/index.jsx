import React from "react";
import "./estilo.css";

export const FormularioCadastro = () => {
  const handleMudancaTitulo = (evento) => {
    this.titulo = evento.target.value;
  };
  return (
    <>
      <form className="form-layout">
        <input
          type="text"
          placeholder="Título"
          onChange={this.handleMudancaTitulo}
        />
        <textarea placeholder="Escreva sua nota." />
        <button>Criar Nota</button>
      </form>
    </>
  );
};
