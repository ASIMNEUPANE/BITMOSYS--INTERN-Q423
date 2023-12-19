// src/components/CryptoList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCoin } from '../redux/cryptoSlice';

const CryptoList = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.crypto);

  const handleBuy = (id) => {
    const quantity = parseInt(prompt('Enter quantity to buy:', 1), 10);
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(buyCoin({ id, quantity }));
    }
  };

  return (
    <div>
      <h1>Cryptocurrencies</h1>
      {coins.map((coin) => (
        <div key={coin.id}>
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>Price: ${coin.price}</p>
          <button onClick={() => handleBuy(coin.id)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default CryptoList;
