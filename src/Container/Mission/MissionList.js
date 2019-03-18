import React, { Component } from 'react'
import moment from 'moment';
export default class MissionList extends Component {
  
  render() {
    const props = this.props.data;
    const date = moment(this.props.data.launch_date_local);
    return (
      <div className="mission-list">
        <div className="pic">
          <img src={props.links.mission_patch} />
        </div>
        <div className="list">
          <div className="desc">
            <h1>{props.rocket.rocket_name} - {props.payloads[0].payload_id} { props.launch_success === false && (<>- <span style={{color: "#ec5f7a"}}>Failed Mission</span></>) }</h1>
            <p>Launched at <b>{date.format('MMMM Do YYYY')}</b> at <b>{date.format('h:mma')}</b> from <b>{props.launch_site.full_name}</b></p>
            <div className="actions">
              { props.links.reddit_campaign && <a target="_blank" href={props.links.reddit_campaign} className="uk-button uk-button-default">Reddit Campaign</a> }
              { props.links.reddit_launch && <a target="_blank" href={props.links.reddit_launch} className="uk-button uk-button-default">Reddit Launch</a> }
              { props.links.reddit_recovery && <a target="_blank"href={props.links.reddit_recovery} className="uk-button uk-button-default">Reddit Recovery</a> }
              { props.links.reddit_media && <a target="_blank" href={props.links.reddit_media} className="uk-button uk-button-default">Reddit Media</a> }
              { props.links.presskit && <a target="_blank" href={props.links.presskit} className="uk-button uk-button-default">Press Kit</a> }
              { props.links.article_link && <a target="_blank" href={props.links.article_link} className="uk-button uk-button-default">Article</a> }
              { props.links.video_link && <a target="_blank" href={props.links.video_link} className="uk-button uk-button-default">Watch Video</a> }
              
            </div>
          </div>
          <div className="flight-number">
            <h1>#{props.flight_number}</h1>
            <p>Flight Number</p>
          </div>
        </div>
      </div>
    )
  }
}
