import React from 'react';
import * as styles from './Member.module.css';
import tempProfile from '../../../assets/temp-profile.png';


function Member({name, role}){
	return(
		<div className={styles.memberProfileContainer}>
			<img src={tempProfile} alt="profile-pic"></img>
			<span className={styles.name}>{name}</span>
			<span className={styles.role}>{role}</span>
		</div>
	);
}

export default Member;