import React from "react";
import logo from "../../images/ReworkLogo.jpg";

import styles from "./Navbar.module.css"; // Importing styles from CSS module

const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="reworkLogo" />
        </div>
        <div>
          <nav>
            <ul>
              <li className={styles.NavItems}>
                <a href="#about">Talent Finder</a>
              </li>
              <li className={styles.NavItems}>
                <a href="#about">For Recruiters</a>
              </li>
              <li className={styles.NavItems}>
                <a href="#about">For Employers</a>
              </li>
              <li className={styles.NavItems}>
                <a href="#about">Company</a>
              </li>
              <li className={styles.NavItems}>
                <a href="#about">About Us</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.NavbarButtons}>
          <button className={styles.NavbarButton1}>Log In</button>

          <button className={styles.NavbarButton2}>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
