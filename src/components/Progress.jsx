import React from 'react';

function Progress() {
  return (
    <div>
      <div className="progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-warning" role="progressbar" style={{width: '55%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
}

export default Progress;