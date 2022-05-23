// import logo from './logo.svg';
import { useState, useEffect } from "react";
import React from 'react';
import Header from "./Header.js";
import Main from "./Main.js";
import PopupWithForm from "./PopupWithForm.js";
import Footer from "./Footer.js";
function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups= () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);  
  }
  return (
    <div className="page">
      <div className="container">
        <Header />
        <Main
          // onEditAvatar={handleEditAvatarClick}
          onEditAvatar={() => handleEditAvatarClick()}
          onEditProfile={() => handleEditProfileClick()}
          onAddPlace={() => handleAddPlaceClick()}
        />
        <PopupWithForm
          title="Редактировать профиль"
          name="popup_profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
              <input className="popup__input popup__input_type_name" id="input-name" placeholder="Введите имя" required type="text" name="nameInput" minLength="2" maxLength="40"/>
              <span className="popup__input-error" id="input-name-error"></span></label>
            <label className="popup__form-field">
              <input className="popup__input popup__input_type_job" id="input-job" placeholder="Введите занятие" required type="text" name="jobInput" minLength="2" maxLength="200"/>
              <span className="popup__input-error" id="input-job-error"></span></label>
            <button className="popup__button" type="submit" >Сохранить</button>
        </PopupWithForm>
        <PopupWithForm
          title="Обновить аватар"
          name="popup_edit-avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
              <input className="popup__input popup__input_type_avatar" placeholder="Аватар" required type="url" name="avatarInput"/>
              <span className="popup__input-error"></span>
            </label>
            <button className="popup__button" type="submit">Сохранить</button>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="popup_add-place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <label className="popup__form-field">
              <input className="popup__input popup__input_type_place" placeholder="Название" required type="text" name="placeInput" minLength="2" maxLength="30"/>
              <span className="popup__input-error"></span>
            </label>
            <label className="popup__form-field">
              <input className="popup__input popup__input_type_link" placeholder="Ссылка на картинку" required type="url" name="linkInput"/>
              <span className="popup__input-error"></span>
            </label>
            <button className="popup__button" type="submit">Создать</button>
        </PopupWithForm>
        <Footer />
      </div>
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>; */
}
