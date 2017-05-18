import React from 'react';
import MessageForm from '../../components/message-form';
import { connect } from 'react-redux';

const ContactUs = ({dispatch, props}) => {
  let submitMessage = (message) => dispatch({type: 'ADD_MESSAGE', message: message})

  return(
    <div>
      Contact Us.
      <MessageForm submitMessage={ submitMessage } />
    </div>
  )
}

export default connect()(ContactUs);
