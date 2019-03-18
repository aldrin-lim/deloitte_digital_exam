import React, { Component } from 'react'
import MissionList from './MissionList';
import './styles.scss';
import axios from 'axios';

export default class Mission extends Component {
  state = {
    data: [],
    launchpads: []
  }
  componentDidMount = () => {
    let data;
    axios.get('http://localhost:8001/launches').then(({ data }) => {
      axios.get('http://localhost:8001/launchpads').then(launchpads => {
        // transform data to add launch site
        this.setState({ launchpads: launchpads.data });
        data = data.map(async item => {
          const siteId = item.launch_site.site_id;
          const launch_site = launchpads.data.filter(pad => siteId === pad.id)[0];
          item.launch_site = launch_site;
          return item;
        });

        Promise.all(data).then(result => {
          this.setState({ data: result });
        })
      })
    })
  }
  render() {
    return (
      <div>
        <h1 className="mission-count">Showing {this.state.data.length} Missions</h1>
        {this.state.data && this.state.data.map((data, i) => <MissionList key={`mission-${i}`} data={data} />)}
      </div>
    )
  }
}
