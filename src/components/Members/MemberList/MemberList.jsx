import React from 'react';
import Member from '../Member/Member';
import styles from './MemberList.module.scss';
import members from '../../../assets/members.json';


function MemberList(){
  return(
    <section id="members" className={styles.memberContainer}>
      <h3 className={styles.header}> Członkowie Zespołu </h3>
      {members.map(({id, name, role}) => (
        <Member key={id} name={name} role={role} />
      ))}    
    </section>
  ); 
}

export default MemberList;