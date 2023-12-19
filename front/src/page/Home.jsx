import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { userPortfolio } = useSelector((state) => state.crypto);

  return (
    <div class="bg-gray-200 p-4">
  <h1 class="text-2xl font-bold mb-4">User Portfolio</h1>
  {userPortfolio.map((coin) => (
    <div key={coin.id} class="flex items-center mb-4 p-4 bg-white shadow-md">
      <img src={coin.image} alt={coin.name} class="mr-4" width={20} />
      <div>
        <h2 class="text-lg font-semibold">{coin.name}</h2>
        <p class="text-gray-600">Quantity: {coin.quantity}</p>
      </div>
    </div>
  ))}
</div>
  );
};

export default Home;
