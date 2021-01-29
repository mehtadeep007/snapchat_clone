import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';

function App() {
  return (
    <div className="App">
      <h1>Snapchat clone</h1>
      <Router>
        <div className="app__body">
          <Switch>
            <Route path="/chats/view">
              <ChatView/>
            </Route>
            <Route path="/chats">
              <Chats/>
            </Route>
            <Route path="/preview">
              <Preview/>
            </Route>
            <Route excat path="/">
              <WebcamCapture/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
