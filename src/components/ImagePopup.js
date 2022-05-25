import React from "react";
function ImagePopup(props) {
  // console.log(props);
  return (
    <div className={`popup popup_view-image ${props.card ? "popup_opened" : ""}`} >
      <figure className="popup__figure">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          alt={props.card ? props.card.name : ""}
          src={props.card ? props.card.link : ""}
        />
        <figcaption className="popup__caption">
          {props.card ? props.card.name : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
