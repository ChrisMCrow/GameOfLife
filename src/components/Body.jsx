import React, { Component } from 'react';
import Player from './Player';
import Event from './Event';
import { Politician, Doctor, Teacher, Artist } from './../models/player.js';
import Progress from './Progress';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Body extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className='body-wrapper'>
        <style jsx>{`
          .body-wrapper {
            margin: 0 5vw;
          }
          .section-wrapper {
            width: 30vw;
            display: inline-block;
          }
        `}</style>
        <Progress />
        <div className='section-wrapper'>
          <Player playerDetails={this.props.playersInfo.player1}/>
          {/* <Player player={this.props.playersInfo.player1}/> */}
        </div>
        <div className='section-wrapper'>
          <Event />
        </div>
        <div className='section-wrapper'>
          <Player playerDetails={this.props.playersInfo.player2}/>
          {/* <Player player={this.props.playersInfo.player2}/>                         */}
        </div>
      </div>
    );
  }
}

Body.propTypes = {
  playersInfo: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    playersInfo: state.playersInfo,
  };
};

export default connect(mapStateToProps)(Body);
