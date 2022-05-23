import React from "react";

function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}
      >
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            aria-label="Закрыть"
            onClick={props.onClose}
          ></button>
          <form className="popup__form" name={props.name} noValidate>
            <h2 className="popup__title">{props.title}</h2>
            {props.children}
          </form>
        </div>
      </div>
    </>
  );
}
{/* <div class="popup popup_edit-avatar">
  <div class="popup__container">
    <button class="popup__close" type="button" aria-label="Закрыть"></button>
    <form class="popup__form" name="formElement" novalidate>
      <h2 class="popup__title">Обновить аватар</h2>
      <label class="popup__form-field">
        <input
          class="popup__input popup__input_type_avatar"
          placeholder="Аватар"
          required
          type="url"
          name="avatarInput"
        />
        <span class="popup__input-error"></span>
      </label>
      <button class="popup__button" type="submit">
        Сохранить
      </button>
    </form>
  </div>
</div>; */}
export default PopupWithForm;
