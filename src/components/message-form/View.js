import React from 'react';

export default (props) => {
  let messageInput;
  return(
    <div>
      <textarea ref={node => (messageInput = node)} rows="5" cols="60" placeholder="Insert message here"></textarea>
      <br></br>
      <button onClick={ () => props.submitMessage(messageInput.value)}>Send</button>
    </div>
  )
}
