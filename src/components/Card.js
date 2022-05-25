import React from 'react';

function Card(props) {
  const {name, link, likes, card, onCardClick} = props;
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="element__item">
      <button className="element__trash"></button>
      <img src={link} alt={name} className="element__image" onClick={handleClick}/>
      <div className="element__description">
        <h2 className="element__title">{name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__counter">{likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;