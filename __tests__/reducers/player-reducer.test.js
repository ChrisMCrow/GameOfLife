import playerReducer from './../../src/reducers/player-reducer';
import constants from './../../src/constants';
const { c } = constants;

describe("playerReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(playerReducer({}, {type: null})).toEqual({});
  })
})