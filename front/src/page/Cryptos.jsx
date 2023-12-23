import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { buyCoin } from "../slices/cryptoSlice";

const Cryptos = () => {
  const dispatch = useDispatch();
  const { coins } = useSelector((state) => state.crypto);
  const handleBuy = async (id, name) => {
    const { value: quantity } = await Swal.fire({
      input: "text",
      inputLabel: "Quantity ",
      inputPlaceholder: "Enter the Quantity",
    });
    if (quantity) {
      Swal.fire(`  ${quantity} quantity is bought of ${name}`);
      if (quantity && quantity > 0) {
        dispatch(buyCoin({ id, quantity }));
      }
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Cryptocurrencies</h1>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="flex items-center mb-4 p-4  shadow-md bg-gray-100"
        >
          <img src={coin.image} alt={coin.name} className="mr-4" width={50} />
          <div>
            <h2 className="text-lg font-semibold">{coin.name}</h2>
            <p className="text-gray-600">Price: ${coin.price}</p>
          </div>
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md mt-2 ml-auto transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
            onClick={() => handleBuy(coin.id, coin.name)}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cryptos;
