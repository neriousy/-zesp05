import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import './MeetingComponent.css'


function MeetingComponent(props){
    const date = props.date;
    const desc = props.desc;

    return(
        <div className="meeting-component">
           <div className="date">{ date }</div>
           <FontAwesomeIcon className="icon" icon={faCalendar}/>
            <div className="content">
                <p>
                    {desc}
                </p>
            </div>

        </div>

        
        
    )
}

export default MeetingComponent;