import React from 'react';
import { endTurn } from './../actions/';
import PropTypes from 'prop-types';

const EventDetails = (props) => {

  function handleEndTurn() {
    props.dispatch(endTurn(props.events, props.players));
  }
  const {name, description} = props.events.currentEvent
  return (
    <div>
      <p>{name}</p>
      <p>{description}</p>
      {/* <p>{props.event.player.name}</p> */}
      <button onClick={handleEndTurn}>End Turn</button>
    </div>
  );
}
 
EventDetails.propTypes = {
  dispatch: PropTypes.func,
  events: PropTypes.object,
  players: PropTypes.object
}

export default EventDetails;