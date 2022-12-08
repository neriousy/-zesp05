import React from 'react';
import styles from './Member.module.scss';
import tempProfile from '../../../assets/temp-profile.png';


function Member({name, role}){
  return(
    <div className={styles.memberProfileContainer}>
      <img src={tempProfile} alt="profile-pic"></img>
      <span className={styles.name}>{name}</span>
      <span className={styles.teamRole}>{role}</span>
    </div>
  );
}

export default Member;