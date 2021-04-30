import React from 'react';
import './footer.scss';
import Twitter from '../../images/twitter.svg';
import Instagram from '../../images/instagram.svg';
import Vk from '../../images/vk.svg';
import Facebook from '../../images/facebook.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__first-block">
            <p>
              © <a href="http://physiconlab.ru">ООО «Физикон Лаб»</a>, 2013—2021
            </p>
            <p>
              <a rel="nofollow" href="/privacy">
                Пользовательское соглашение
              </a>
            </p>
          </div>
          <div className="footer__second-block">
            <div className="social-button">
              <a href="https://twitter.com/oblako_znanij" className=" social-button__item twitter">
                <img src={Twitter} alt="Twitter" />
              </a>
              <a href="http://vk.com/oblako_znanij" className=" social-button__item vkontakte">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/oblakoznanij/?ref=oblako" className=" social-button__item facebook">
                <img src={Vk} alt="Vk" />
              </a>
              <a href="https://www.instagram.com/oblako_znanij/" className=" social-button__item instagram">
                <img src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
          <div className="footer__third-block">
            <p>
              <a href="tel:+74987446757">+7 (499) 322-07-57</a>,{' '}
              <a href="mailto:info@imumk.ru">info@imumk.ru</a>
            </p>
            <p>
              <a href="#">Правила пользования сайтом</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
