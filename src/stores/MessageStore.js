import { observable, decorate, action, configure } from 'mobx'; 

configure({ enforceActions: 'observed' });

class MessageStore {
  messageData = [
    'mobx is great 💜',
  ];

  addMessage = (message) => {
    this.messageData.push(message);
  };
}

decorate(MessageStore, {
    messageData: observable,
    addMessage: action,
});

export default new MessageStore();

