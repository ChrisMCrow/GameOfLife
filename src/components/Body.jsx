import React, { Component } from 'react';
import Player from './Player';
import Event from './Event';
import Progress from './Progress';
import Start from './Start';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Body extends Component {
  constructor(props) {
    super(props);
  }


  // handleChange = () => {
  //   console.log("changed");
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  // }

  render() {

    return (
      <div className='body-wrapper'>
        <style jsx>{`
          .body-wrapper {
            margin: 0 4vw;
          }
          .middle-wrapper {
            width: 25vw;
            margin: 50px 2vw;
            float: left;
          }
          .section-wrapper {
            width: 30vw;
            margin: 50px 0;
            float: left;
          }
        `}</style>
        {this.props.events.gameInProgress ? (
          <div>
            <Progress />

            <div className='section-wrapper'>
              <Player playerDetails={this.props.players.player1} />
              {/* <Player player={this.props.players.player1}/> */}
            </div>
            <div className='middle-wrapper'>
              <Event />
            </div>
            <div className='section-wrapper'>
              <Player playerDetails={this.props.players.player2} />
              {/* <Player player={this.props.players.player2}/>*/}
            </div>
          </div>
        ) : (
            <Start
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              dispatch={this.props.dispatch}
            />
          )}
      </div>
    );
  }
}

Body.propTypes = {
  playersInfo: PropTypes.object,
}

const mapStateToProps = state => {
  console.log(state);
  return {
    players: state.players,
    events: state.events,
  };
};

export default connect(mapStateToProps)(Body);
