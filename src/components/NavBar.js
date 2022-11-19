import { NavLink } from 'react-router-dom';
import s from './NavBar.module.css';

const img = require('../assets/planet.png');

const handleActive = ({ isActive }) => (isActive
  ? {
    color: 'blue',
    textDecoration: 'underline',
  }
  : { });

const NavBar = () => (
  <header className={s.headerContainer}>
    <NavLink to="/" className={s.logo}>
      <div className={s.logoContainer}>
        <img src={img} alt="Logo" />
        <h1>
          Space Travelers&apos; Hub
        </h1>
      </div>
    </NavLink>
    <nav className={s.navigation}>
      <NavLink
        to="/"
        style={handleActive}
      >
        Rockets
      </NavLink>
      <NavLink
        to="missions"
        style={handleActive}
      >
        Missions
      </NavLink>
      <NavLink
        to="dragons"
        style={handleActive}
      >
        Dragons
      </NavLink>
      <span> | </span>
      <NavLink
        to="myprofile"
        style={handleActive}
      >
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
