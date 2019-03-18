import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';
import header from './Assets/space-photo.jpeg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-continaer">
          <div className="header">
            <img src={header} />
            <h1>Discover Space Missions</h1>
            <a  uk-icon="icon: chevron-down; ratio: 2" />
          </div>
          <div className="container">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
