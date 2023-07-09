import React from "react";
import Botao from "./Botao";

const Mensagem = ({ mensagem, onStatusChange }) => {
  const { descricao, visualizacao, remetente, destinatario } = mensagem;

  return (
    <li className={`message ${visualizacao}`}>
      <Botao />
      <span className={`visualized ${visualizacao}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z" />
        </svg>
      </span>
      <p>
        <strong> </strong>
        {descricao}
      </p>
    </li>
  );
};

export default Mensagem;
