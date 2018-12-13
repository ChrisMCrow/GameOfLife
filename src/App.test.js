import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import playerReducer from './reducers/player-reducer';
import constants from './constants';
const { c } = constants;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe("playerReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(playerReducer({}, {type: null})).toEqual({});
  })
})