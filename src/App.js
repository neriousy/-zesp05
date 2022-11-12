import React from 'react';
import { Navbar } from './components';
import { MembersContainer } from './components';
import { MeetingsTimeLine } from './components';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <MembersContainer/>
      <MeetingsTimeLine/>
    </React.Fragment>
  );
}

export default App;
