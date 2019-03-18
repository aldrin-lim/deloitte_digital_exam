import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';
import header from './Assets/space-photo.jpeg';
import Form from './Container/Form';
import Mission from './Container/Mission';
class App extends Component {
  state = {
    hide: false
  }
  toggleHeader = () => {
  }
  render() {
    return (
      <div className="App">
        <div className="main-continaer">
          <div className="header">
            <img src={header} />
            <h1>Discover Space Missions</h1>
            <a uk-icon="icon: chevron-down; ratio: 2" />
          </div>
          <div className="container">
            <div className="uk-card uk-card-default uk-card-small uk-card-body">
              <Mission />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
