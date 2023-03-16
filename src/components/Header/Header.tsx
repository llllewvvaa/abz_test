import './Header.scss';
import logo from '../../assets/icons/logo.svg';
import {Button} from "../Button";

export const Header = () => (
  <header className="header">
    <div className="header__content">
      <a
        href="/"
        className="header__logo"
      >
        <img src={logo} alt="logo test task" />
      </a>

      <div className="header__buttons">
        <a href="#users">
          <Button text={'Users'} width={'100px'} />
        </a>

        <a href="#form">
          <Button text={'Sign up'} width={'100px'} />
        </a>
      </div>
    </div>
  </header>
);
