import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const links = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/calculator',
    text: 'Calculator',
  },
  {
    id: 3,
    path: '/quotes',
    text: 'Quotes',
  },
];

const Logo = () => <h1 className="logo">Math Magicians</h1>;
const Navigation = () => (
  <nav className="nav">
    <ul className="nav-ul">
      {links.map((link) => (
        <li key={link.id}>
          <Link className="nav-a" to={link.path}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Header = () => (
  <header>
    <Logo />
    <Navigation />
  </header>
);

export default Header;
