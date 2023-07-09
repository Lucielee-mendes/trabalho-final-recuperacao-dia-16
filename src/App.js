import React, { useState } from "react";
import Mensagem from "./Mensagem";
import Botao from "./Botao";
import "./styles.css";

const App = () => {
  const [mensagens, setMensagens] = useState([
    {
      descricao: "Oi...",
      visualizacao: "nao-visualizado",
      remetente: "Remetente A",
      destinatario: "Destinatario A"
    },
    {
      descricao: "Tu não me ama mais?",
      visualizacao: "nao-visualizado",
      remetente: "Remetente B",
      destinatario: "Destinatario B"
    },
    {
      descricao: "Oi, boa tarde.",
      visualizacao: "visualizado",
      remetente: "Remetente A",
      destinatario: "Destinatario A"
    },
    {
      descricao: "Quem é você mesmo?",
      visualizacao: "visualizado",
      remetente: "Remetente B",
      destinatario: "Destinatario B"
    }
  ]);

  const handleMessageStatusChange = (index) => {
    const updatedMessages = [...mensagens];
    updatedMessages[index].visualizacao = "visualizado";
    setMensagens(updatedMessages);
  };

  return (
    <div className="chat">
      <div className="header">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
            <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
          </svg>
        </button>
        <h3>Meu Chat</h3>
      </div>
      <div className="content">
        <ul>
          {mensagens.map((mensagem, index) => (
            <Mensagem
              key={index}
              mensagem={mensagem}
              onStatusChange={() => handleMessageStatusChange(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
