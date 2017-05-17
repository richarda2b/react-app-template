import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default () => (
  <div className={styles.header}>
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
  </div>
)

