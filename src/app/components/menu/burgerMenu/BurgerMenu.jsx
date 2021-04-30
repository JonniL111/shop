import React from 'react';
import { Link } from 'react-router-dom';
import './burgerMenu.scss';

function BurgerMenu() {
  const [popupStatus, setPopupStatus] = React.useState(false);
  const refMenu = React.useRef();

  React.useEffect(() => {
    document.body.addEventListener('click', (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(refMenu.current)) setPopupStatus(false);
    });
  }, []);

  function togglePopup() {
    setPopupStatus((popupStatus) => !popupStatus);
  }

  return (
    <nav ref={refMenu} className="burgermenu">
      <button onClick={togglePopup} className="burgermenu__button">
        <span className="burgermenu__button-lines"></span>
      </button>
      {popupStatus && (
        <ul className="burgermenu-list burgermenu-list--open">
          <li className="burgermenu-list__item">
            <Link to="/" className="burgermenu-list__link" href="#">
              О проекте
            </Link>
          </li>
          <li className="burgermenu-list__item">
            <Link to="/" className="burgermenu-list__link" href="#">
              Пункт2
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default BurgerMenu;
