import React from 'react';
import { addPlayer, startGame } from './../actions';
import PropTypes from 'prop-types';

const PlayerForm = (props) => {

  let _player1, _player2, _player1Prof, _player2Prof;
  let options = ["Artist", "Doctor", "Politician", "Teacher"];

  function handleSubmitButton(e) {
    e.preventDefault();
    props.dispatch(addPlayer(_player1.value,
      _player2.value, _player1Prof.value, _player2Prof.value));
    props.dispatch(startGame());
  }
  return (
    <div>
      <form onSubmit={handleSubmitButton}>
        <label htmlFor="player1">Player 1 Name:</label>
        <input name="player1" id="player1" type="text" ref={(input) => {_player1 = input;}} />

        <select ref={(input) => {_player1Prof = input;}}>
          {options.map(element => (
            <option value={element} key={element} >{element}</option>
          ))}
        </select>


        <label htmlFor="player2">Player 2 Name:</label>
        <input name="player2" type="text" id="player2" ref={(input) => {_player2 = input;}} />
        <select ref={(input) => {_player2Prof = input;}}>
          {options.map(element => (
            <option value={element} key={element} >{element}</option>
          ))}
        </select>

        <button className='btn btn-primary'>Play Game</button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  dispatch: PropTypes.func
}

export default PlayerForm;