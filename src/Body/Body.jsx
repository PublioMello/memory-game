import React, { useState, useEffect } from "react";
import "./Body.css";

function Body({ images, showAllCards, shuffleCount }) {
  //cria dois pares para cada imagem e embarakga aoenas uma vez
  const [cards, setCards] = useState(() =>
    [...images, ...images]
      .map((image, index) => ({
        id: index, //id unico para cada carta
        image,
        pairID: index % images.length, // identifica o par da imagem
      }))
      .sort(() => Math.random() - 0.5),
  );

  //Guarda os Ids das cartas abertas no momento
  const [flippedCards, setFlippedCards] = useState([]);

  //Guarda os pares que voce ja acertou
  const [matchedCards, setMatchedCards] = useState([]);

  //impede os cliques enquanto compara duas cartas
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    // Não embaralha ao carregar a página.
    if (shuffleCount === 0) return;

    setCards((currentCards) =>
      [...currentCards].sort(() => Math.random() - 0.5),
    );
  }, [shuffleCount]);

  function handleCardClick(card) {
    if (showAllCards) return;

    //nao deixa clicar durante a comparacao,
    //em carta ja aberta ou ja encontrada

    if (
      isChecking ||
      flippedCards.includes(card.id) ||
      matchedCards.includes(card.pairID)
    ) {
      return;
    }

    const newFlippedCards = [...flippedCards, card.id];

    //abre a carta clicada
    setFlippedCards(newFlippedCards);

    //se abriu somente uma carta , nao ha comparacao
    if (newFlippedCards.length < 2) return;

    //encontra os objetos das duas cartas
    const firstCard = cards.find((item) => item.id === newFlippedCards[0]);
    const secondCard = cards.find((item) => item.id === newFlippedCards[1]);

    setIsChecking(true);

    //se as duas cartas forem iguais, mantem abertas
    if (firstCard.pairID === secondCard.pairID) {
      setMatchedCards([...matchedCards, firstCard.pairID]);
      setFlippedCards([]);
      setIsChecking(false);
      return;
    }

    // se forem diferentes, espera 1 s e fecha as duas
    setTimeout(() => {
      setFlippedCards([]);
      setIsChecking(false);
    }, 1000);
  }

  return (
    <main className="game-board">
      {cards.map((card) => {
        const isFlipped = flippedCards.includes(card.id);
        const isMatched = matchedCards.includes(card.pairID);
        const isRevealed = showAllCards || isFlipped || isMatched;

        return (
          <button
            className={`card ${isRevealed ? "is-revealed" : ""}`}
            key={card.id}
            onClick={() => handleCardClick(card)}
          >
            <span className="card-question" aria-hidden="true">?</span>
            <img src={card.image} alt="Carta revelada" />
          </button>
        );
      })}
    </main>
  );
}

export default Body;
