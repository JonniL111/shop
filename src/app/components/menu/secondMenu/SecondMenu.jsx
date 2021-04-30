import React from 'react';
import { Link } from 'react-router-dom';
import './secondMenu.scss'

function SecondMenu() {
  return (
    <ul className="second-menu__list">
      <li className="second-menu__item">
        <Link to="/"className="second-menu__link">
          Каталог
        </Link>
      </li>
      <li className="second-menu__item">
        <Link to="/"className="second-menu__link">
        Активация
        </Link>
      </li>
      <li className="second-menu__item">
        <Link to="/"className="second-menu__link">
        Вход
        </Link>
      </li>      
    </ul>
  );
}

export default SecondMenu;
