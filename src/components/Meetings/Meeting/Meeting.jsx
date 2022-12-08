import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import styles from './Meeting.module.scss';



function Meeting({date, desc}){
  return(
    <div className={styles.meetingComponent}>
      <div className={styles.date}>{ date }</div>
      <FontAwesomeIcon className={styles.icon} icon={faCalendar}/>
      <div className={styles.content}>   
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default Meeting;