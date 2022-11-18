import React from 'react';
import Navbar from './Navbar/Navbar';
import Members from '../components/Members/MemberList/MemberList';
import MeetingsList from '../components/Meetings/MeetingsList/MeetingsList';
import Footer from './Footer/Footer';

function Layout() {
	return (
		<React.Fragment>
			<Navbar/>
			<main>
				<Members/>
				<MeetingsList/>
			</main>
			<Footer/>
		</React.Fragment>
	);
}

export default Layout;
