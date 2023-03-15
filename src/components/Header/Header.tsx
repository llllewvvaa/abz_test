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
        <Button text={'Users'} width={'100px'} />

        <Button text={'Sign up'} width={'100px'} />
      </div>
    </div>
  </header>
);
