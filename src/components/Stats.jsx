import React from 'react';
import './Stats.css';

const Stats = ({ stats }) => {
  return (
    <ul>
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>{`${key}: ${value}`}</li>
      ))}
    </ul>
  );
};

export default Stats;
