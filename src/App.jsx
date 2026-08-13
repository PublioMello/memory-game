import { useState } from "react";
import Head from "./Head/Head.jsx";
import Body from "./Body/Body.jsx";

function App() {
  const images = [
    "https://images.unsplash.com/photo-1626808642875-0aa545482dfb",
    "https://images.unsplash.com/photo-1546842931-886c185b4c8c",
    "https://images.unsplash.com/photo-1520763185298-1b434c919102",
    "https://images.unsplash.com/photo-1442458017215-285b83f65851",
    "https://images.unsplash.com/photo-1496483648148-47c686dc86a8",
    "https://images.unsplash.com/photo-1591181520189-abcb0735c65d",
  ];
  // Diz se todas as cartas devem aparecer.
  const [showAllCards, setShowAllCards] = useState(false);

  // Cada alteração nesse número pede para o Body embaralhar.
  const [shuffleCount, setShuffleCount] = useState(0);

  const [gameCompleted, setGameCompleted] = useState(false);
  function handleShowAll() {
    setShowAllCards(true);
  }

  function handleHideAll() {
    setShowAllCards(false);
  }

  function handleShuffle() {
    if (!showAllCards && !gameCompleted) return;

    if (gameCompleted) {
      setShowAllCards(true);
    }
    setGameCompleted(false);

    setShuffleCount((count) => count + 1);
  }
  return (
    <div>
      <Head
        onShowAll={handleShowAll}
        onHideAll={handleHideAll}
        onShuffle={handleShuffle}
        showAllCards={showAllCards}
        gameCompleted={gameCompleted}
      />
      <Body
        images={images}
        showAllCards={showAllCards}
        shuffleCount={shuffleCount}
        onGameCompleted={() => setGameCompleted(true)}
      />
    </div>
  );
}

export default App;
