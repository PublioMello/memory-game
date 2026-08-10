import React from "react";
import "./Head.css";

function Head() {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo" aria-hidden="true">◈</span>
        <div>
          <p className="header-kicker">Desafio de memória</p>
          <h1>Memory Game</h1>
        </div>
      </div>

      <nav className="header-actions" aria-label="Controles do jogo">
        <button className="header-action" type="button">
          Mostrar cartas
        </button>
        <button className="header-action" type="button">
          Ocultar cartas
        </button>
        <button className="header-action header-action-primary" type="button">
          Misturar cartas
        </button>
      </nav>
    </header>
  );
}

export default Head;
