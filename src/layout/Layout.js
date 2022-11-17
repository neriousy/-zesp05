import React from 'react';
import Navbar from './Navbar/Navbar';
import Members from '../components/Members/MemberList/MemberList';
import MeetingsList from '../components/Meetings/MeetingsList/MeetingsList';


function Layout() {
	return (
		<React.Fragment>
			<Navbar/>
			<main>
				<Members/>
				<MeetingsList/>
			</main>
		</React.Fragment>
	);
}

export default Layout;
