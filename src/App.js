import React, { Component } from 'react';
import Card from './components/card/card.component'

import './App.css';

class App extends Component {
  state = {
    heading: ['Small Features', 'Booking Engine', 'Rates', 'CC Gateway', 'CRM/Email Marketing']
  }

  render() {
    const { heading } = this.state
    return (
      <div>
        <nav className='nav'>
          <h2 className='wrapper'>InnRoad</h2>
        </nav>

        <div className='wrapper'>
          <div className='heading'>
            {heading.map((head, index) => (
              <h3 key={index}>{head}</h3>
            ))}
          </div>
          <Card />
        </div>

      </div>
    );
  }

}

export default App;
