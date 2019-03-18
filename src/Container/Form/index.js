import React, { Component } from 'react'
import './styles.scss';
export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-text">Keywords</label>
          <div className="uk-form-controls">
            <input className="uk-input" id="form-stacked-text" type="text" placeholder="eg Falcon" />
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Launch Pad</label>
          <div className="uk-form-controls">
            <select className="uk-select" id="form-stacked-select">
              <option>Any</option>
              <option>Option 02</option>
            </select>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Min Year</label>
          <div className="uk-form-controls">
            <select className="uk-select" id="form-stacked-select">
              <option>Any</option>
              <option>Option 02</option>
            </select>
          </div>
        </div>

        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="form-stacked-select">Max Year</label>
          <div className="uk-form-controls">
            <select className="uk-select" id="form-stacked-select">
              <option>Any</option>
              <option>Option 02</option>
            </select>
          </div>
        </div>
        <div className="uk-margin">
          <button className="uk-button uk-button-primary uk-width-1-1">Apply</button>
        </div>
      </div>
    )
  }
}
