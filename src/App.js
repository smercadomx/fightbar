import React, { Component } from 'react';
import Fights from './Fights.js';
import { BrowserRouter } from 'react-router-dom';

let fights = [
  {
    id: 1,
    title: 'Genady Golovkin vs Daniel Jacobs',
    date: 'March 11, 2017 10PM/7PM ET/PT',
    firstFighterImage: 'http://placehold.it/80x80',
    secondFighterImage: 'http://placehold.it/80x80'
  },
  {
    id: 2,
    title: 'Genady Golovkin vs Daniel Jacobs',
    date: 'March 11, 2017 10PM/7PM ET/PT',
    firstFighterImage: 'http://placehold.it/80x80',
    secondFighterImage: 'http://placehold.it/80x80',
    isPpv: true
  }
];

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fights fights={fights} />
      </BrowserRouter>
    );
  }
}

export default App;
