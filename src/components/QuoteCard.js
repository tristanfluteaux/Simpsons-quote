import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, character, image, characterDirection }) => (
  <figure className="QuoteCard">
    <img src={image} alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
      <p>{characterDirection}</p>

    </figcaption>
  </figure>
);

export default QuoteCard;
