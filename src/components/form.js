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
    email: '',
    buttonText: 'Invite me!'
  }

  handleInputChange(event) {
    this.setState({ email: event.target.value });
  }

  validateEmail(event) {
    event.preventDefault();
    if ( /(.+)@(.+){2,}\.(.+){2,}/.test(this.state.email) ){
      emailInvites.push({ email: this.state.email });
      this.setState({ email: ''});
    } else {
      console.log('invalid email');
    }
  }

  render() {
    this.error = "Please enter a valid email";
    return (
      <div className="right-content">
        <div>
          <img className="logo" src="../../assets/images/webLogo.png" alt="logo" />
        </div>
        <div className="caption">
          <p>Share spontaneous moments based <br />on where you are</p>
        </div>
        <div className="col-lg-6 foorm">
          <form className="input-group" onSubmit={this.validateEmail.bind(this)}>
            <input
              className="form-control"
              placeholder="Enter your email to join the beta"
              onChange={this.handleInputChange.bind(this)}
              type="text"
              value={this.state.email}
            />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">{this.state.buttonText}</button>
            </span>
          </form>
        </div>
        {this.message}
      </div>
    );
  }
}
