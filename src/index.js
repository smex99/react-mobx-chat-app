import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';

import MessageStore from './stores/MessageStore';
import PostStore from './stores/PostStore';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Chat from './views/Chat';
import Posts from './views/Posts';

import './index.css';
import App from './App';


const Root = (
  <BrowserRouter>
    <Provider 
      MessageStore={MessageStore} 
      PostStore={PostStore}
    >
      <App>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/posts" component={Posts} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(Root , document.getElementById('root'));