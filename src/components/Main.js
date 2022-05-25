import { useState, useEffect } from "react";
import api from '../utils/Api.js'
import Card from "./Card.js";

function Main({onEditAvatar,onEditProfile,onAddPlace,onCardClick}) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(()=>{
      api.getProfileInfo().then(data =>{
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      }).catch((err)=>{
          console.log(err);
      })
      api.getAllCards().then(cards=>{
          setCards(cards)
      }).catch((err)=>{
        console.log(err);
    })
  },[])
  
  return (
    <main className="content">
        <section className="profile">
          <div className="profile__wrapper">
            <button className="profile__avatar-button" onClick={onEditAvatar}></button>
            <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar-img"/>
            <div className="profile__info">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
          </div>
          <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
        </section>
        <section className="places">
          <ul className="places__list"> {
            cards.map(item => (
                <Card key={item._id} card={item} link={item.link} name={item.name} likes={item.likes} onCardClick={onCardClick} />
            ))
          }</ul>
        </section>
      </main>
  );
}

export default Main;