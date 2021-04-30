import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

function Card({ data, pay }) {
  const payment = pay.payment === 'рубли' ? `${data.price} руб.` : `${data.priceBonus} бон.`;
  return (
    <div className="card">
      <div className="card-thumbnail">
        <img src={'./img/115.jpg'} className="card-thumbnail__img" alt="Демо"></img>
      </div>
      <div className="card-content">
        <p className="card-content__title">{data.subject}</p>
        <p className="card-content__grade">{`${data.grade} класс`}</p>
        <p className="card-content__description">{data.genre}</p>
        <Link to="/" className="card-content__more">
          Подробнее
        </Link>
        <Link to="/" className="card-content__buy">
          {payment}
        </Link>
      </div>
    </div>
  );
}

export default Card;
