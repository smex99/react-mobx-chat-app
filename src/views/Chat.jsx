import React from 'react';
import { observer, inject } from 'mobx-react';
import Composer from '../components/Composer';
import ChatMessage from '../components/chatMessage';


class Chat extends React.Component {
  render() {
    const { MessageStore } = this.props;

    return(
      <div className="chat">
        <h2>Mobx chat app <span style={{color: 'rgb(109, 33, 128)'}}>{`${MessageStore.count} message(s)`}</span></h2>
        { MessageStore.messageData.map(message => <ChatMessage key={message} message={message} />)}
        <Composer addMessage={MessageStore.addMessage}/>
      </div>
    );
  }
}

export default inject("MessageStore")(observer(Chat));