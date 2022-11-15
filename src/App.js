import React from 'react';
import Navbar from './components/navbar/Navbar';
import MembersContainer from './components/membersContainer/MembersContainer';
import MeetingsTimeLine  from './components/meetingsTimeLine/MeetingsTimeLine';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <MembersContainer/>
        <MeetingsTimeLine/>
      </main>
    </React.Fragment>
  );
}

export default App;
