import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div style={{
      background: '#1e3a8a',
      color: 'white',
      padding: '20px',
      borderRadius: '12px',
      flex: 1,
      minWidth: '200px',
      textAlign: 'center'
    }}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default Card;
