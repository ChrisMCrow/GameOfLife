import React from 'react';
import Wheel from './../assets/wheel.png';
import Card from './../assets/card.png';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getEvent } from './../actions';

function Event(props) {

  function handleSpin() {
    console.log('handle spin activated')
    props.dispatch(getEvent(props.player));
  }

  return(
    <div className='event-wrapper'>
      <style jsx>{`
        .event-wrapper {
          text-align: center;
        }
        #wheel {
          width: 100%;
          cursor: pointer;
        }
        .card-wrapper {
          position: relative;
        }
        #card {
          box-shadow: 3px 3px #ddd, 6px 6px #fff, 9px 9px #ddd, 12px 12px #fff, 15px 15px #ddd;
        }
        `}</style>
      <h1>Player's Turn: {props.player.name}</h1>
      <img alt='Wheel' onClick={handleSpin} id='wheel' src={Wheel} />
      <div className='card-wrapper'>
        <img alt='card' id='card' src={Card} />
      </div>
    </div>
  );
}

Event.propTypes = {
  player: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect()(Event);