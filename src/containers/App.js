import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Fights from './Fights.js';
import Fight from './Fight.js';
import { connect } from 'react-redux';

class App  extends Component {
  showCurrentLocation() {
    if (this.props.location) {
      return (
        <div>Current Location: {this.props.location.coords.latitude} {this.props.location.coords.longitude}</div>
      );
    }
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.showCurrentLocation()}
          <Route exact path="/" component={Fights}/>
          <Route path="/fight/:id" component={Fight}/>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { location: state.location.location };
}

export default connect(mapStateToProps)(App);
