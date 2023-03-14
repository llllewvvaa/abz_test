import './Header.scss';
import logo from '../../assets/icons/logo.svg';

export const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo"  alt="logo test task"/>

    <button className="header__users">
      Users
    </button>

    <button className="header__sign-up">
      Sign up
    </button>
  </header>
);
