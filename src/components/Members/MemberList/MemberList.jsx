import React from 'react';
import Member from '../Member/Member';
import styles from './MemberList.module.scss';
import members from './members.json';


function MemberList(){
	return(
		<section className={styles.memberContainer}>
			<h2>
                    Członkowie Zespołu
			</h2>
			{members.map(({id, name, role}) => (
				<Member key={id} name={name} role={role} />
			))}
                
                
		</section>
	); 
}

export default MemberList;