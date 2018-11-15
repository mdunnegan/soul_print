import React, { Component } from 'react';
import SoulPrint from './components/soul_print';
import Form from './components/form';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <SoulPrint />
      </div>
    );
  }
}
