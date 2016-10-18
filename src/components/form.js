import React, { Component } from 'react';

export default class InviteForm extends Component {
  state = {
    email: ''
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

  sendEmailToFireBase(event) {
    event.preventDefault();
    const email = this.state.email;
    console.log(email);
    this.setState({ email: '' });
  }

  render() {
    return (
      <form onSubmit={this.sendEmailToFireBase.bind(this)}>
        <input
          placeholder="testy@mctest.face"
          onChange={this.handleInputChange.bind(this)}
          type="text"
          value={this.state.email}
        />
        <button type="submit">Invite me!</button>
      </form>
    );
  }
}
