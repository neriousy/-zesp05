import React from "react";
import './MeetingsTimeLine.css';
import MeetingComponent from '../meetingComponent/';
import meetings from './meetings.json';


function MeetingsTimeLine(){
    return(
        <section className="time-line-container">
            <h2>
                Harmonogram prac
            </h2>
            <div className="time-line">
                {meetings.meetings.map((meetings) =>{
                    return <MeetingComponent key={meetings.id} date={meetings.date} desc={meetings.desc}/>
                    
                })}
            </div>
        </section>        
    )
}

export default MeetingsTimeLine;