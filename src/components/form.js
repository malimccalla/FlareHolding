import React, { Component } from 'react';
import firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API,
  authDomain: 'flare-1ef4b.firebaseapp.com',
  databaseURL: 'https://flare-1ef4b.firebaseio.com',
  storageBucket: 'flare-1ef4b.appspot.com',
  messagingSenderId: '1031183019465'
};

firebase.initializeApp(config);

const ref = firebase.database().ref();
const emailInvites = ref.child('email invites');

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
    emailInvites.push({ email });
    this.setState({ email: '' });
  }

  render() {
    return (
      <div>
        <form className="ui action input" onSubmit={this.sendEmailToFireBase.bind(this)}>
          <input
            placeholder="testy@mctest.face"
            onChange={this.handleInputChange.bind(this)}
            type="text"
            value={this.state.email}
          />
          <button className="ui button" type="submit">Invite me!</button>
        </form>
      </div>
    );
  }
}
