import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <img src="./assets/images/bmuse_logo.png" alt="logo" className="logo"/>
          <img src="./assets/images/search.png" alt="search" className="search" />
        </div>
      </div>
    );
  }
}

export default Header;