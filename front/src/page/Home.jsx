import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { exchangeCoin } from "../slices/cryptoSlice";

const Home = () => {
  const { userPortfolio } = useSelector((state) => state.crypto);
  const { coins } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const handleExchange = async (id, name) => {
    const coinOptions = coins.reduce((options, coin) => {
      options[(coin.name, coin.id)] = coin.name;
      return options;
    }, {});

    const { value: selectedCoinName } = await Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: coinOptions,

      inputPlaceholder: "Select a coins",
      showCancelButton: true,
    });
    if (selectedCoinName) {
      Swal.fire(`You selected ${selectedCoinName} to be exchange`);
    }

 await   dispatch(exchangeCoin({ id, exid: Number(selectedCoinName), quantity: 1 }));
  };
  return (
    <div class="bg-gray-200 p-4">
      <h1 class="text-2xl font-bold mb-4">User Portfolio</h1>
      {userPortfolio.map((coin) => (
        <div
          key={coin.id}
          class="flex items-center mb-4 p-4 bg-white shadow-md"
        >
          <img src={coin.image} alt={coin.name} class="mr-4" width={20} />
          <div>
            <h2 class="text-lg font-semibold">{coin.name}</h2>
            <p class="text-gray-600">Quantity: {coin.quantity}</p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 ml-auto"
            onClick={() => handleExchange(coin.id, coin.name)}
          >
            Exchange
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
