import React from 'react';
import { Link } from 'react-router-dom';
import About from './About';

export default function Root() {
  return (
    <div>
      root
      <Link to="/about">to About</Link>
    </div>
  );
}
