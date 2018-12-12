import React from 'react';
import Wheel from './../assets/wheel.png';
import Card from './../assets/card.png';
function Event() {

  function handleSpin() {

  }

  return(
    <div className='event-wrapper'>
      <style jsx>{`
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
      <h1>Player's Turn: </h1>
      <img onClick={handleSpin} id='wheel' src={Wheel} />
      <div className='card-wrapper'>
        <img id='card' src={Card} />
      </div>
    </div>
  );
}

export default Event;