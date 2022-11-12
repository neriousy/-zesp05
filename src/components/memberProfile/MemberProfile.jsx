import React from "react";
import "./MemberProfile.css"

function MemberProfile(props){
    const name = props.name;
    const role = props.role

    return(
        <div className="member-profile-container">
            <img src="/temp-profile.png" alt="profile-pic"></img>
            <span className="name">{name}</span>
            <span className="role">{role}</span>
        </div>
    )
}

export default MemberProfile;