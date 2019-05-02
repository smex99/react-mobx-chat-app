import React from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ MessageStore }) => {
  return(
    <React.Fragment>
			<div className="topnav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/chat">Chat room</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/chat" className="notification">
        <span>Inbox</span>
        <span class="badge">{MessageStore.count}</span>
        </NavLink>
			</div>
    </React.Fragment>
  );
}

export default inject("MessageStore")(observer(Navbar));