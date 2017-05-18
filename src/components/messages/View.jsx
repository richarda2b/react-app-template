import React from 'react';

export default ({ messages }) => (
  <div>
    <h3>Messages:</h3>
    <ul>
      { messages.map(message => <li key={Math.random()}>{message}</li>) }
    </ul>
  </div>
)
