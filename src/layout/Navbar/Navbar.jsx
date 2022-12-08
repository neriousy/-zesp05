import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './Navbar.module.scss';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
  return(
    <header className={styles.header}>
      <nav>
        <ul className={styles.navUl}>
          <li className={styles.listItem}><a href="home"> <FontAwesomeIcon icon={faHouse}/></a> </li>

          <li className={styles.listItem}>
            <a href='#home' className={(navData) => (navData.isActive ? styles.active : '')}> STRONA GŁÓWNA </a>
          </li>

          <li className={styles.listItem}>
            <a href='#objective' className={(navData) => (navData.isActive ? styles.active : '')}> ZAŁOŻENIA PROJEKTOWE </a>
          </li>

          <li className={styles.listItem}>
            <a href='#members' className={(navData) => (navData.isActive ? styles.active : '')}> CZŁONKOWIE ZESPOŁU </a> 
          </li>

          <li className={styles.listItem}>
            <a href='#meetings' className={(navData) => (navData.isActive ? styles.active : '')}> HARMONOGRAM </a> 
          </li>
        
          <li className={styles.listItem}>
            <a href='#documentation' className={(navData) => (navData.isActive ? styles.active : '')}> DOKUMENTACJA </a> 
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;