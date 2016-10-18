import React, { Component } from 'react';
import InviteForm from './form';
import Footer from './footer';
import Phone from './phone';

export default class App extends Component {

  render() {
    console.log('rendered!');
    return (
      <div>
        <Phone />
        <InviteForm />
        <Footer />
      </div>
    );
  }
}
