import logo from "../images/Logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место" className="header__logo" />
    </header>
  );
}

export default Header;
