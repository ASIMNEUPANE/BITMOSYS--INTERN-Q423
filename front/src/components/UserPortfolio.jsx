// src/components/UserPortfolio.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const UserPortfolio = () => {
  const { userPortfolio } = useSelector((state) => state.crypto);

  return (
    <div>
      <h1>User Portfolio</h1>
      {userPortfolio.map((coin) => (
        <div key={coin.id}>
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>Quantity: {coin.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPortfolio;
