import React from 'react';

const Message = ({ loading, error }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong. Please try again.</p>;
  return null;
};

export default Message;
