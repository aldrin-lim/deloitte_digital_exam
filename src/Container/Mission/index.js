import React, { Component } from 'react'
import MissionList from './MissionList';
import './styles.scss';
import axios from 'axios';
import Form from '../Form';
import moment from 'moment';
export default class Mission extends Component {
  state = {
    data: [],
    launchpads: [],
    searchResults: []
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
    });
  }

  getAllyears = () => {
    const result = this.state.data.map(item => {
      return parseInt(moment(item.launch_date_local).format('YYYY'))
    }).sort();
    return result.length > 0 ? [...new Set(result)] : null;
  }

  getAllLaunchPads = () => {
    return this.state.launchpads.length > 0 ? this.state.launchpads  : null;
  }

  search = async (searchKeys = {}) => {
    let searchResults = this.state.data;
    let execs = [];
    if (searchKeys.name) {
      await Promise.all(searchResults.filter( item => item.rocket.rocket_name.toLowerCase().includes(searchKeys.name.toLowerCase()))).then(result => { searchResults = result });
    }
    if (searchKeys.minYear) {
      await Promise.all(searchResults.filter( item => {
        const year = parseInt(moment(item.launch_date_local).format('YYYY'));
        return searchKeys.minYear <= year;
      })).then(result => { searchResults = result });
    }
    if (searchKeys.maxYear) {
      await Promise.all(searchResults.filter( item => {
        const year = parseInt(moment(item.launch_date_local).format('YYYY'));
        return searchKeys.maxYear >= year;
      })).then(result => { searchResults = result });
    }
    if (searchKeys.launchPad) {
      await Promise.all(searchResults.filter( item => item.launch_site.id === searchKeys.launchPad)).then(result => { searchResults = result });
    }
    this.setState({ searchResults });
  }

  renderMissionList = () => {
    if (this.state.searchResults.length > 0) {
      return <div>
        <h1 className="mission-count">Showing {this.state.searchResults.length} Missions</h1>
        {this.state.searchResults.map((data, i) => <MissionList key={`mission-${i}`} data={data} />)}
      </div>
    } else {
      return <div>
        <h1 className="mission-count">Showing {this.state.data.length} Missions</h1>
        {this.state.data && this.state.data.map((data, i) => <MissionList key={`mission-${i}`} data={data} />)}
      </div>
    }
  }
  
  render() {
    return (
      <div>
        <Form search={this.search} years={this.getAllyears()} launchpads={this.getAllLaunchPads()} /> 
        { this.renderMissionList() }
      </div>
    )
  }
}
