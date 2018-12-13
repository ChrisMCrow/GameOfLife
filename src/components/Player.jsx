import React, { Component } from 'react';
import PropTypes from 'prop-types';
function Player(props) {

  return (
    <div className='player-wrapper'>
      <style jsx>{`
        .player-wrapper {
          background-color: rgba(255, 255, 255, .2);
        }
        ul.stats {
          text-align: left;
        }
      `}</style>
      <ul className='stats'>
        <li>name: {props.playerDetails.name}</li>
        <li>profession: {props.playerDetails.profession}</li>
        <li>age: {props.playerDetails.age}</li>
        <li>bank: {props.playerDetails.bank}</li>
        <li>salary: {props.playerDetails.salary}</li>
        <li>attributes: {props.playerDetails.attributes.map(att => att)}</li>
        <li>inventory: {props.playerDetails.inventory.map(inv => inv)}</li>
        <li>mortgageamt: {props.playerDetails.mortgage}</li>
        <li>autoloan: {props.playerDetails.autoLoan}</li>
        <li>gameover: {props.playerDetails.gameOver}</li>
      </ul>
      {console.log(props)}
      </div>
  );
}

Player.propTypes = {
  playerDetails: PropTypes.object,
}


export default Player;
