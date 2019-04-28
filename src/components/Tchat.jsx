import React from 'react';
import { observer, inject } from 'mobx-react';
import ScrollArea from 'react-scrollbar';
import ChatMessage from './chatMessage';

import './Tchat.css';

class Tchat extends React.Component {
  state = {
    message: '',
  };

  close = () => {
    document.getElementById("myForm").style.display = "none";
  };

  open = () => {
    document.getElementById("myForm").style.display = "block";
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.MessageStore.addMessage(this.state.message);
    this.setState({ message: '' });
  };

  handleChange = event => {
    event.preventDefault();
    
    this.setState({ message: event.target.value });
  };

  render () {
    const { MessageStore } = this.props;
    
    return(
      <React.Fragment>        
        <div className="chat-popup" id="myForm">
          <form className="form-container" onSubmit={this.handleSubmit}>
            <h1>Tchat</h1>

            <ScrollArea
              speed={0.8}
              className="area"
              contentClassName="content"
              horizontal={true}
              minScrollSize={50}
            >
              {MessageStore.messageData.map(message => <ChatMessage key={message} message={message} />)}
            </ScrollArea>         

            <label htmlFor="message"><b>Message</b></label>
            <textarea 
              id="message"
              name="message"
              type="text"
              placeholder="Type message.."
              value={this.state.message}
              onChange={this.handleChange}
              required 
            />

            <button type="submit" className="btn send">
              <i className="fa fa-share icon" />
              Send
            </button>

            <button type="button" className="btn cancel" onClick={this.close}>
              <i className="fa fa-close icon" />
              Close
            </button>
          </form>
        </div>

        <button className="open-button" onClick={this.open}>
          <i className="fa fa-comment icon" />
          Open Tchat
        </button>
      </React.Fragment>
    );
  }
}

export default inject("MessageStore")(observer(Tchat));;