import React from 'react';
import { Link } from 'react-router-dom';

class Restaurant extends React.Component {
  render() {
    const { city } = this.props.restaurant;

    return (
      <div>
        <Link to='/'>Z powrotem</Link>
        <h3>{city}</h3>
      </div>
    );
  }
}

export default Restaurant;
