import React from 'react';
import styles from './MeetingsList.module.scss';
import Meeting from '../Meeting/Meeting';



function MeetingsList({textHeader, dataJson}){
  return(
    <section id="meetings" className={styles.timeLineContainer}>
      <h2> {textHeader} </h2>
      <div className={styles.timeLine}>
        {dataJson.map(({id, date, desc}) =>(
          <Meeting key={id} date={date} desc={desc} />
        ))}
      </div>
    </section>        
  );
}

export default MeetingsList;