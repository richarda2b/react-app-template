import React, { Component } from 'react';
import Header from '../../components/header';
import { connect } from 'react-redux'
import Messages from '../../components/messages';

class App extends Component {
  render() {
    return (
      <div>
        Simple React app!
        {this.props.messages.length > 1 ? <Messages messages={this.props.messages}/> : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(App)
