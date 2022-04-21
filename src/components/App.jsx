import React from "react";
import quotes from "../quotes";
import Card from "./Card";

function App() {
  function getCards(card) {
    return (
      <Card
        key={card.key}
        imgURL={card.imgURL}
        quote={card.quote}
        by={card.by}
      />
    );
  }

  return (
    <div>
      <h1>Spongebob Squarepants Quotes</h1>
      <div className="row ">{quotes.map(getCards)}</div>
    </div>
  );
}

export default App;
