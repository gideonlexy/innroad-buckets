import React, { Component } from 'react';
import Card from './components/card/card.component'

import './App.css';

class App extends Component {

  render() {

    return (
      <div>
        <nav className='nav'>
          <h2 className='wrapper'>InnRoad</h2>
        </nav>

        <div className='wrapper'>
          <div className='heading'>
            <h3>Small Features</h3>
            <h3>Booking Engine</h3>
            <h3>Rates</h3>
            <h3>CC Gateway</h3>
            <h3>CRM/Email Marketing</h3>
          </div>
          <Card />
        </div>

      </div>
    );
  }

}

export default App;
