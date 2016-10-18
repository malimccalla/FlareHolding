import React, { Component } from 'react';
import InviteForm from './form';
import firebase from 'firebase';

const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: FIREBASE_API_KEY,
      authDomain: 'flare-1ef4b.firebaseapp.com',
      databaseURL: 'https://flare-1ef4b.firebaseio.com/',
      storageBucket: 'flare-1ef4b.appspot.com'
    }
    firebase.initializeApp(config);
  }

  render() {
    console.log('rendered!');
    return (
      <div>
        <InviteForm />
      </div>
    );
  }
}
