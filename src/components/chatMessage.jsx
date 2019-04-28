import React from 'react';
// import Gravatar from 'react-gravatar';
import './chatMessage.css';

const ChtaMessage = ({ message }) => {
  return(
    <React.Fragment>
      <div className="container">
        <p>{message}</p>
      </div>
    </React.Fragment>
  );
}

export default ChtaMessage;