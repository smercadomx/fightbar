import React, { Component } from 'react';
import FightCard from '../components/FightCard';
import { connect } from 'react-redux';
import { fetchFights } from '../actions/index';
import { withRouter } from 'react-router-dom';

class Fights extends Component {
  componentWillMount() {
    this.props.fetchFights();
  }
  render() {
    let fightCards = this.props.fights.map((fight) => {
      return <FightCard key={fight.id} fight={fight} onClick={this.onFightClick.bind(this)} />;
    });
    return (
      <div>
        <h1>Upcoming Fights</h1>
        {fightCards}
      </div>
    );
  }
  onFightClick(fight) {
    this.props.history.push(`/fight/${fight.id}`);
  }
}

function mapStateToProps(state) {
  return { fights: state.fights.all };
}

export default connect(mapStateToProps, {fetchFights})(withRouter(Fights));
