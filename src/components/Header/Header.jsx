import "./Header.css";
import daylogo from "../../assets/daylogo-blue.png";

function Header() {
  return (
    <>
      <header>
        <nav>
          <a className="logo" href="#home">
            <img src={daylogo} alt="Day Logo" />
          </a>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
