import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCoin } from '../slices/cryptoSlice';

const Cryptos = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.crypto);

  const handleBuy = (id) => {
    const quantity = 1;
    if (!isNaN(quantity) && quantity > 0) {
      dispatch(buyCoin({ id, quantity }));
    }
  };

  return (
    <div className="bg-gray-200 p-4">
    <h1 className="text-2xl font-bold mb-4">Cryptocurrencies</h1>
    {coins.map((coin) => (
      <div key={coin.id} className="flex items-center mb-4 p-4 bg-white shadow-md">
        <img src={coin.image} alt={coin.name} className="mr-4" width={50}  />
        <div>
          <h2 className="text-lg font-semibold">{coin.name}</h2>
          <p className="text-gray-600">Price: ${coin.price}</p>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-auto"
          onClick={() => handleBuy(coin.id)}
        >
          Buy
        </button>
      </div>
    ))}
  </div>
  

  );
};

export default Cryptos;
