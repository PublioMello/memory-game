import React, { useState } from "react";
import "./Body.css";

function Body({ images }) {
  //cria dois pares para cada imagem e embarakga aoenas uma vez
  const [cards] = useState(() =>
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
  const [isChecking, setIsChecking] = useState([]);

  function handleCardClick(card) {
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
  }

  return (
    <main className="game-board">
      {cards.map((card) => (
        <button className="card" key={card.id}>
          <img src={card.image} alt="Carta do jogo" />
        </button>
      ))}
    </main>
  );
}

export default Body;
