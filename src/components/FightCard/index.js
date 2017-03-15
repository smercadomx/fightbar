import React, { Component } from 'react';
import './style.css';

class FightCard extends Component {
  render() {
    return (
      <div className="FightCard">
        <div className="FightCard-images">
          <img className="FightCard-image" src={this.props.firstFighterImage} />
          <img className="FightCard-image" src={this.props.secondFighterImage} />
        </div>
        <div className="FightCard-title">{this.props.title}</div>
        <div className="FightCard-date">{this.props.date}</div>
        {this.props.isPpv &&
          <span className="FightCard-ppv">PPV</span>
        }
      </div>
    );
  }
}

export default FightCard;
