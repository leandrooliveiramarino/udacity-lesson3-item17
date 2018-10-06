import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class ChatWindow extends Component {
    static propTypes = {
      handleSubmit: PropTypes.func.isRequired,
      messages: PropTypes.array.isRequired,
      user: PropTypes.object.isRequired
    }

    state = {
        isChatDisabled: true,
        text: ''
    }

    handleSubmit = (event) => {
      this.props.handleSubmit(event);
      this.setState({
        isChatDisabled: true,
        text: ''
      });
    }

    render() {
        return (
            <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
              {this.props.messages.map((message, index) => (
                <Message
                  key={index}
                  message={message}
                  username={this.props.user.username}
                />
              ))}
            </ul>

            <div>
              <form
                className="input-group"
                onSubmit={this.handleSubmit}
              >
                <input
                  type="hidden"
                  name="username"
                  value={this.props.user.username}
                />
                <input
                  type="text"
                  name="text"
                  value={this.state.text}
                  className="form-control"
                  placeholder="Enter your message..."
                  onChange={this.handleInput}
                />
                <div className="input-group-append">
                  <button
                    className="btn submit-button"
                    disabled={this.isDisabled()}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
    }

    isDisabled = () => {
        return this.state.isChatDisabled;
    }

    handleInput = event => {
      const input = event.target;
      this.setState(prevState => ({
        ...prevState,
        text: input.value,
        isChatDisabled: !input.value
      }));
    }
}

export default ChatWindow;