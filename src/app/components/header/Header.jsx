import React from 'react';
import './header.scss';

import LogoSvg from '../../images/logo.svg';
import { HeaderMenu, SecondMenu } from '../menu';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <Link to="/" className="header-logo">
            <img className="header-logo__img" src={LogoSvg} alt="Облако знаний" />
          </Link>
          <div className="header-menu">
            <HeaderMenu />
          </div>
          <div className="second-menu">
            <SecondMenu/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
