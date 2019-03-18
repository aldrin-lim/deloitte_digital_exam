import React, { Component } from 'react';
import logo from './logo.png';
import './App.scss';
import header from './Assets/space-photo.jpeg';
import Form from './Container/Form';
import Mission from './Container/Mission';
import ScrollableAnchor from 'react-scrollable-anchor'
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
          <ScrollableAnchor id={'header'}>
            <div className="header">
              <img src={header} />
              <h1>Discover Space Missions</h1>
              <a id="headerButton" href="#container" uk-icon="icon: chevron-down; ratio: 2" />
            </div>
          </ScrollableAnchor>
          <ScrollableAnchor id={'container'}>
            <div className="container">
              <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <Mission />
              </div>
            </div>
          </ScrollableAnchor>
          <div className="footer">
            <span>Copyright © 2018 Space Savvy  </span>
            <a id="footerButton" href="#header">Back to Top</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
