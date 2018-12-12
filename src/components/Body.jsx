import React, { Component } from 'react';
import Player from './Player';
import Event from './Event';
import { Politician, Doctor, Teacher, Artist } from './../models/player.js';

class Body extends Component {

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
        <div className='section-wrapper'>
          <Player player={new Doctor("Chris")}/>
          <Player player={new Teacher("Brian")}/>
        </div>
        <div className='section-wrapper'>
          <Event />
        </div>
        <div className='section-wrapper'>
          <Player player={new Politician("Hyewon")}/>
          <Player player={new Artist("Skye")}/>                        
        </div>
      </div>
    );
  }
}

export default Body;
