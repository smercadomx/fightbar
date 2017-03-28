import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFight } from '../actions/index';
import BarCard from '../components/BarCard';

class Fight extends Component {
  componentWillMount() {
    this.props.fetchFight({
      id: this.props.match.params.id
    });
  }
  render() {
    if (!this.props.fight) {
      return null;
    }

    return (
      <div>
        <h1>{this.props.fight.title}</h1>
        {this.props.fight.bars.map((bar) => <BarCard key={bar.id} bar={bar} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { fight: state.fights.fight };
}

export default connect(mapStateToProps, {fetchFight})(Fight);
