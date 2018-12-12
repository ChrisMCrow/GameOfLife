import React, { Component } from 'react';

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
        <li>name: {props.player.name}</li>
        <li>profession: {props.player.profession}</li>
        <li>age: {props.player.age}</li>
        <li>bank: {props.player.bank}</li>
        <li>salary: {props.player.salary}</li>
        <li>attributes: {props.player.attributes.map(att => att)}</li>
        <li>inventory: {props.player.inventory.map(inv => inv)}</li>
        <li>mortgageamt: {props.player.mortgage}</li>
        <li>autoloan: {props.player.autoLoan}</li>
        <li>gameover: {props.player.gameOver}</li>
      </ul>
      {console.log(props)}
      </div>
  );
}

export default Player;
