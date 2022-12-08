import React from 'react';
import HomeSlide from '../../components/HomeSlide/HomeSlide';
import Objective from '../../components/Objective/Objective';
import Perks from '../../components/Perks/Perks';
import MemberList from '../../components/Members/MemberList/MemberList';
import Meetings from '../../components/Meetings/MeetingsList/MeetingsList';
import Documentation from '../../components/Documentation/Documentation';
import Footer from '../Footer/Footer';

function Home(){
  
  return(
    <>
      <HomeSlide/>
      <Perks/>
      <Objective/>
      <MemberList/>
      <Meetings/>
      <Documentation/>
      <Footer/>
    </>
  );
}

export default Home;