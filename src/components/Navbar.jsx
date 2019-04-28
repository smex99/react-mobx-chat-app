import React from 'react';
import './Navbar.css';

const Navbar = props => {
  return(
    <React.Fragment>
			<div className="topnav">
        <a className="active" href="#home">Home</a>
        <a href="#chat">Chat</a>
			</div>
    </React.Fragment>
  );
}

export default Navbar;