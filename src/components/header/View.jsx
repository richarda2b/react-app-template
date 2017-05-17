import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className={"menu"}>
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
  </div>
)

