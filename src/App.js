import React, { Component } from 'react';
import FightCard from './components/FightCard';
import BarCard from './components/BarCard';
import BarDetail from './components/BarDetail';

class App extends Component {
  render() {
    return (
      <div>
        <FightCard
          title="Genady Golovkin vs Daniel Jacobs"
          date="March 11, 2017 10PM/7PM ET/PT"
          isPpv={true}
          firstFighterImage="http://placehold.it/80x80"
          secondFighterImage="http://placehold.it/80x80" />
        <FightCard
          title="Saul Alvarez vs Julio Cesar Chavez Jr."
          date="May 06, 2017 10PM/7PM ET/PT"
          isPpv={false}
          firstFighterImage="http://placehold.it/80x80"
          secondFighterImage="http://placehold.it/80x80" />
        <BarCard
          name="The Abbey Tavern"
          address="4100 Geary Blvd"
          distance="11mi"
          image="http://placehold.it/80x80"
          cover={20} />
        <BarCard
          name="Blackhorn"
          address="834 Irving St"
          distance="12mi"
          image="http://placehold.it/80x80" />
        <BarDetail />
      </div>
    );
  }
}

export default App;
