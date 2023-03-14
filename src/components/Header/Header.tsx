import './Header.scss';
import logo from '../../assets/icons/logo.svg';

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
        <button className="header__button header__users">
          Users
        </button>

        <button className="header__button header__sign-up">
          Sign up
        </button>
      </div>
    </div>
  </header>
);
