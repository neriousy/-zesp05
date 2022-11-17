import React from 'react';
import { members } from './members.json';
import Member from '../Member/Member';
import * as styles from './MemberList.module.css';


function MemberList(){
	return(
		<section className={styles.memberContainer}>
			<h2>
                    Członkowie Zespołu
			</h2>
                
			{members.map(({id, name, role}) =>(
				<Member key={id} name={name} role={role} />
			))}
                
                
		</section>
	); 
}

export default MemberList;