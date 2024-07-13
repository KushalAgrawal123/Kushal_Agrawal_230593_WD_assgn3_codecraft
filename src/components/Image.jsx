import React from 'react';
import './Image.css';

const Image = ({ imageUrl, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
};

export default Image;
