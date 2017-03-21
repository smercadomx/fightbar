import React, { Component } from 'react';
import FightCard from './components/FightCard';

class Fights extends Component {
  render() {
    let fightCards = this.props.fights.map((fight) => {
      return <FightCard key={fight.id} fight={fight} onClick={(fight) => console.log(fight)} />;
    });
    return (
      <div>
        <h1>Upcoming Fights</h1>
        {fightCards}
      </div>
    );
  }
}

export default Fights;
