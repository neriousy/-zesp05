import React from 'react';
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import Objective from '../../components/Objective/Objective';
import Perks from '../../components/Perks/Perks';
import MemberList from '../../components/Members/MemberList/MemberList';
import Meetings from '../../components/Meetings/MeetingsList/MeetingsList';
import Documentation from '../../components/Documentation/Documentation';
import Footer from '../Footer/Footer';
import plan from '../../assets/plan.json';
import meetings from '../../assets/meetings.json';

function Home(){
  
  return(
    <>
      <HomeSlide/>
      <Perks/>
      <Objective/>
      <MemberList/>
      <Meetings dataJson={plan} textHeader='Planowany harmonogram prac'/>
      <Meetings dataJson={meetings} textHeader='Zapis spotkan'/>
      <Documentation/>
      <Footer/>
    </>
  );
}

export default Home;