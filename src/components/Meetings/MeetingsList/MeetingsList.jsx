import React from 'react';
import styles from './MeetingsList.module.scss';
import Meeting from '../Meeting/Meeting';
import meetings from './meetings.json';



function MeetingsList(){
  return(
    <section id="meetings" className={styles.timeLineContainer}>
      <h2> Planowany Harmonogram prac </h2>
      <div className={styles.timeLine}>
        {meetings.map(({id, date, desc}) =>(
          <Meeting key={id} date={date} desc={desc} />
        ))}
      </div>
    </section>        
  );
}

export default MeetingsList;