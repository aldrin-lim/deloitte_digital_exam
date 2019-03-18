import React, { Component } from 'react'
import './styles.scss';
export default class Form extends Component {


  
  onInputChange = (key, { target: { value } }) => {
    this.setState({ [key]: isNaN(value) ? value : parseInt(value) })
  }

  apply = () => {
    this.props.search(this.state)
  }
  render() {

    return (
      <div className="form">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-text">Keywords</label>
          <div className="uk-form-controls">
            <input onChange={this.onInputChange.bind(this, 'name')} className="uk-input" id="form-stacked-text" type="text" placeholder="eg Falcon" />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Launch Pad</label>
          <div className="uk-form-controls">
            <select onChange={this.onInputChange.bind(this, 'launchPad')} className="uk-select" id="form-stacked-select">
              <option value={0}>Any</option>
              {this.props.launchpads && this.props.launchpads.map((item, i) => <option key={`launchpad-${i}`} value={item.id}>{item.full_name}</option>)}
            </select>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Min Year</label>
          <div className="uk-form-controls">
            <select onChange={this.onInputChange.bind(this, 'minYear')} className="uk-select" id="form-stacked-select">
            <option value={0}>Any</option>
              {this.props.years && this.props.years.map((item, i) => <option key={`minyear-${i}`} value={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Max Year</label>
          <div className="uk-form-controls">
            <select onChange={this.onInputChange.bind(this, 'maxYear')} className="uk-select" id="form-stacked-select">
            <option value={0}>Any</option>
              {this.props.years && this.props.years.map((item, i) => <option key={`minyear-${i}`} value={item}>{item}</option>)}
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <button onClick={this.apply} className="uk-button uk-button-primary uk-width-1-1">Apply</button>
        </div>
      </div>
    )
  }
}
