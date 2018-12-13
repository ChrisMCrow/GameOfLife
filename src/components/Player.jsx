import React from 'react';
import PropTypes from 'prop-types';
function Player(props) {
  const { name, profession, age, bank, salary, attributes, inventory, mortgage, autoLoan, gameOver} = props.playerDetails;
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
        <li>name: {name}</li>
        <li>profession: {profession}</li>
        <li>age: {age}</li>
        <li>bank: {bank}</li>
        <li>salary: {salary}</li>
        <li>attributes: {attributes.map(att => att)}</li>
        <li>inventory: {inventory.map(inv => inv)}</li>
        <li>mortgageamt: {mortgage}</li>
        <li>autoloan: {autoLoan}</li>
        <li>gameover: {gameOver}</li>
      </ul>
      {console.log(props)}
      </div>
  );
}

Player.propTypes = {
  playerDetails: PropTypes.object,
}


export default Player;
