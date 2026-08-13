import "./Head.css";

function Head({
  onShowAll,
  onHideAll,
  onShuffle,
  showAllCards,
  gameCompleted,
}) {
  return (
    <header className="header">
      <div className="header-brand">
        <span className="header-logo" aria-hidden="true">
          ◈
        </span>
        <div>
          <p className="header-kicker">Desafio de memória</p>
          <h1>Memory Game</h1>
        </div>
      </div>

      <nav className="header-actions" aria-label="Controles do jogo">
        <button className="header-action" type="button" onClick={onShowAll}>
          Mostrar cartas
        </button>
        <button className="header-action" type="button" onClick={onHideAll}>
          Ocultar cartas
        </button>
        <button
          className="header-action header-action-primary"
          type="button"
          onClick={onShuffle}
          disabled={!showAllCards && !gameCompleted}
        >
          Misturar cartas
        </button>
      </nav>
    </header>
  );
}

export default Head;
