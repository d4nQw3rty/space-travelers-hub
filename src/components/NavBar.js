import { NavLink } from 'react-router-dom';

const img = require('../assets/planet.png');

const NavBar = () => (
  <header className="top-section d-flex">
    <NavLink to="/" className="logo">
      <img src={img} alt="Logo" />
      <h1>
        Space Travelers&apos; Hub
      </h1>
    </NavLink>
    <nav className="d-flex">
      <NavLink to="/">
        Rockets
      </NavLink>
      <NavLink to="missions">
        Missions
      </NavLink>
      <NavLink to="dragons">
        Dragons
      </NavLink>
      <NavLink to="myprofile">
        My Profile
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
