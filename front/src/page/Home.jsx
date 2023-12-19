import React from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import {Link} from 'react-router-dom'

const Home = () => {
  const { userPortfolio } = useSelector((state) => state.crypto);
  const { coins } = useSelector((state) => state.crypto);


  const handleExchange = async (id, name) => {
    const coinOptions = coins.reduce((options, coin) => {
      options[coin.id] = coin.name;
      return options;
    }, {});

    const { value: selectedCoinId } = await Swal.fire({
      title: `Exchange ${name} with`,
      input: "select",
      inputOptions: coinOptions,
      inputPlaceholder: "Select a cryptocurrency",
      html: `
        <div>
          <input placeholder='Enter the exchange quantity' type = number id="swal-input1" class="swal2-input style="width: 100%;"">
        </div>
      `,
      showCancelButton: true,
      
    });
  };
  // const handleExchange = async (id, name) => {
  //   const coinOptions = coins.reduce((options, coin) => {
  //     options[coin.id] = coin.name;
  //     return options;
  //   }, {});

  //   const { value: selectedCoinId } = await Swal.fire({
  //     title: `Exchange ${name} with`,
  //     input: "select",
  //     inputOptions: coinOptions,
  //     inputPlaceholder: "Select a cryptocurrency",
  //     html: `
  //       <div>
  //         <input placeholder='Enter the exchange quantity' type = number id="swal-input1" class="swal2-input style="width: 100%;"">
  //       </div>
  //     `,
  //     showCancelButton: true,
      
  //   });
  // };
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
          <Link to={`/exchange/${coin?.id}`} >Exchange</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
