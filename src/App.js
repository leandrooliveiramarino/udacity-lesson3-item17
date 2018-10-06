import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {

  state = {
    messages: []
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form
      .elements['text']
      .value;
    const username = form
      .elements['username']
      .value;

    this.setState(prevState => ({
      messages: [
        ...prevState.messages,
        {username, text}
      ]
    }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <ChatWindow
              key={user.username}
              user={user}
              handleSubmit={this.handleSubmit}
              messages={this.state.messages}/>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
