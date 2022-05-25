import React from "react";
import { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";
import Footer from "./Footer.js";
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          // onEditAvatar={() => handleEditAvatarClick()}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <PopupWithForm
          title="Редактировать профиль"
          name="popup_profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_name"
              id="input-name"
              placeholder="Введите имя"
              required
              type="text"
              name="nameInput"
              minLength="2"
              maxLength="40"
            />
            <span className="popup__input-error" id="input-name-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_job"
              id="input-job"
              placeholder="Введите занятие"
              required
              type="text"
              name="jobInput"
              minLength="2"
              maxLength="200"
            />
            <span className="popup__input-error" id="input-job-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="popup_edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          buttonText="Сохранить"
        >
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_avatar"
              placeholder="Аватар"
              required
              type="url"
              name="avatarInput"
            />
            <span className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="popup_add-place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Создать"
        >
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_place"
              placeholder="Название"
              required
              type="text"
              name="placeInput"
              minLength="2"
              maxLength="30"
            />
            <span className="popup__input-error"></span>
          </label>
          <label className="popup__form-field">
            <input
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
              type="url"
              name="linkInput"
            />
            <span className="popup__input-error"></span>
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
