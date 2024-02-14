import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <NavLink to='/' style={styles.navLink}>
            Home
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to='/about' style={styles.navLink}>
            About
          </NavLink>
        </li>
        <li style={styles.navItem}>
          <NavLink to='/contact' style={styles.navLink}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 20px',
    marginBottom: '20px',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  navItem: {
    marginRight: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};
