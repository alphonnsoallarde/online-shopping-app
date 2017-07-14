import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <h2>This is the landing page!</h2>
        <ul>
          <li><a href="/login">Login Page</a></li>
        </ul>
      </div>
    );
  }
}
