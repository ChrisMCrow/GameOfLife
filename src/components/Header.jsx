import React from 'react';
import HeaderBackground from './../assets/header.jpeg';

function Header() {
  return (
    <div className='header-wrapper'>
      <style jsx>{`
        .header-wrapper {
          margin: 20px;
          background-image: url(${HeaderBackground});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 250px;

          border: 5px solid #469DD4;
          border-radius: 20px;
        }
      `}</style>
    </div>
  );
}

export default Header;
