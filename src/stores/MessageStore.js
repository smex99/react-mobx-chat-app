import { 
  observable, 
  decorate, 
  action, 
  computed, 
  configure,
} from 'mobx';

configure({ enforceActions: 'observed' });

class MessageStore {
  messageData = [
    'mobx is great 💜',
  ];

  addMessage = (message) => {
    this.messageData.push(message);
  };

  get count() {
    return this.messageData.length;
  };
}

decorate(MessageStore, {
  messageData: observable,
  addMessage: action,
  count: computed,
});

export default new MessageStore();