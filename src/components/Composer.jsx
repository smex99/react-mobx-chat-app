import React, { useState } from 'react';
import './Composer.css';

const Composer = ({ addMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    addMessage(message);
    setMessage('');
  };

  const handleChange = event => {
    event.preventDefault();
    setMessage(event.target.value);
  };

  return (
    <React.Fragment>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="message"><b>Type your message:</b></label>
        <textarea
          id="message"
          name="message"
          type="text"
          className="composer"
          placeholder="Type message..."
          value={message}
          onChange={(e) => handleChange(e)}
          required
        />

        <button 
          className="btn send" 
          type="submit"
        >
          <i className="fa fa-share icon" />
          Send
        </button>
      </form>
    </React.Fragment>
  ); 
}

export default Composer;