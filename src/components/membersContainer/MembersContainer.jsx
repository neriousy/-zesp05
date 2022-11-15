import React from "react";
import members from './members.json';
import MemberProfile from "../memberProfile/MemberProfile";
import './MembersContainer.css'

function MembersContainer(){
    return(
            <section className="members-container">
                <h2>
                    Członkowie Zespołu
                </h2>
                {members.members.map((members) =>{
                    return <MemberProfile key={members.id} name={members.name} role={members.role} />
                })}
            </section>
    ) 
}

export default MembersContainer;