import React from 'react';
import { Link } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      root
      <Link to="/about">to About</Link>
    </div>
  );
}
