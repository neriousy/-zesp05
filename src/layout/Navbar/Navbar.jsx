import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import * as styles from './Navbar.module.css';

function Navbar(){
	return(
		<header>
			<nav>
				<ul className={styles.navList}>
					<li><a href="#home">
						<FontAwesomeIcon icon={faHouse}/> 
						<span className={styles.flexColumn}>
							<span>Drużyna</span>
							<span>V</span>
						</span> 
					</a>
					</li>
					<li><a href="#projekt">O Projekcie</a></li>
					<li><a href="#sklad">Członkowie Zespołu</a></li>
					<li><a href="#harmonogram">Harmonogram</a></li>
					<li><a href="#dokumentacja">Dokumentacja</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;