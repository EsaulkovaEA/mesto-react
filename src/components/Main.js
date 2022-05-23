import React from "react";
import api from '../utils/Api'

function Main(props) {
  console.log(props);
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__wrapper">
            <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
            <img src="#" alt="Аватар пользователя" className="profile__avatar-img"/>
            <div className="profile__info">
              <h1 className="profile__title"></h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
              <p className="profile__subtitle"></p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </section>
        <section className="places">
          <ul className="places__list"></ul>
        </section>
      </main>
  );
}

export default Main;