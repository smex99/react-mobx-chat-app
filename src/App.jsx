import React from 'react';
import { observer, inject } from 'mobx-react';

import Tchat from './components/Tchat';
import ChatMessage from './components/chatMessage';
import Composer from './components/Composer';
import Navbar from './components/Navbar';
import './App.css';

class App extends React.Component {
  render() {
    const { MessageStore } = this.props;
    
    return (
      <React.Fragment>
        <Navbar />
        
        <div className="app">
          <div className="simple">
            <h2>Popup Chat with Mobx state management.</h2>
            { MessageStore.messageData.map(message => <ChatMessage key={message} message={message} />)}
            <Composer addMessage={MessageStore.addMessage}/>
          </div>
    
          <div className="popup">
            <Tchat />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default inject("MessageStore")(observer(App));
