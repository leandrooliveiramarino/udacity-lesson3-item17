import React from 'react';
import PropTypes from 'prop-types';

function Message(props) {
    return (
      <li
        className={props.message.username === props.username
            ? 'message sender'
            : 'message recipient'
        }
      >
        <p>{`${props.message.username}: ${props.message.text}`}</p>
      </li>
    );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired
}

export default Message;