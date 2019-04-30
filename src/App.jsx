import React from 'react';
import { observer, inject } from 'mobx-react';

import Tchat from './components/Tchat';
import ChatMessage from './components/chatMessage';
import Composer from './components/Composer';
import Navbar from './components/Navbar';

import Posts from './views/Posts';

import './App.css';

class App extends React.Component {
  render() {
    const { MessageStore } = this.props;
    
    return (
      <React.Fragment>
        <Navbar />
        
        <div className="app">
          <div className="simple">
            <h2>Mobx chat app <span style={{color: 'rgb(109, 33, 128)'}}>{`${MessageStore.count} message(s)`}</span></h2>
            { MessageStore.messageData.map(message => <ChatMessage key={message} message={message} />)}
            <Composer addMessage={MessageStore.addMessage}/>
          </div>

          <Posts />
    
          <div className="popup">
            <Tchat />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default inject("MessageStore")(observer(App));
