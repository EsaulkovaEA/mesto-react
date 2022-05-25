import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="element__item">
      <button className="element__trash"></button>
      <img src={props.card.link} alt={props.card.name} className="element__image" onClick={handleClick}/>
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button className="element__like" type="button"></button>
          <span className="element__counter">{props.card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;