import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Fitness Tracker</h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
