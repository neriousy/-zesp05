import React from 'react';
import * as styles from './MeetingsList.module.css';
import Meeting from '../Meeting/Meeting';
import { meetings } from './meetings.json';


function MeetingsList(){
	return(
		<section className={styles.timeLineContainer}>
			<h2>
                Harmonogram prac
			</h2>
			<div className={styles.timeLine}>
				{meetings.map(({id, date, desc}) =>(
					<Meeting key={id} date={date} desc={desc} />
				))}
			</div>
		</section>        
	);
}

export default MeetingsList;