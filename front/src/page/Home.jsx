import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { exchangeCoin } from "../slices/cryptoSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { userPortfolio } = useSelector((state) => state.crypto);
  const { coins } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const count = userPortfolio.reduce((acc, obj) => {
    return acc + obj.quantity;
  }, 0);

  const handleExchange = async (id, name) => {
    const findQuan = userPortfolio.find((coin) => {
      return coin.id === id;
    });
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

    const { value: quantity } = await Swal.fire({
      input: "number",
      inputLabel: `Enter ${selectedCoinName} Quantity `,
      inputPlaceholder: `Enter the Quantity`,
    });

    if (quantity < findQuan.quantity) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Coins Exchange Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      if (selectedCoinName && quantity && quantity > 0) {
        await dispatch(
          exchangeCoin({
            id,
            exid: Number(selectedCoinName),
            quantity: quantity,
          })
        );
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have insufficient amount!",
      });
    }
  };
  return (
    <>
      <div className="bg-gray-100 p-4">
        <div className="container mx-auto my-3">
          <table className="table-auto">
            <tbody className="bg-gray-200">
              <tr className="">
                <td className="border p-4">
                  <p className="text-sm font-bold">
                    Total number of crypto types:
                  </p>
                  <h1 className="text-2xl font-bold">{userPortfolio.length}</h1>
                </td>
                <td className="border p-4">
                  <p className="text-sm font-bold">
                    Total number of crypto Amount:
                  </p>
                  <h1 className="text-2xl font-bold">{count}</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="font-bold p-2">Crypto Coin:</h1>

        {userPortfolio.length > 0 ? (
          userPortfolio.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center mb-4 p-4  shadow-md rounded-md"
            >
              <img
                src={coin.image}
                alt={coin.name}
                className="mr-4"
                width={20}
              />
              <div>
                <h2 className="text-lg font-semibold">{coin.name}</h2>
                <p className="text-gray-600">Quantity: {coin.quantity}</p>
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md mt-2 ml-auto transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500"
                onClick={() => handleExchange(coin.id, coin.name)}
              >
                Exchange
              </button>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center ">
            <Link to="/cryptos" className="text-black no-underline">
              <h1 className="text-3xl mb-4">No coins!!</h1>
              <h2 className="text-xl">Click Here to Buy..</h2>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
