import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coins: [
    {
      id: 1,
      name: "Bitcoin (BTC)",
      price: 50000,
      image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029",
    },
    {
      id: 2,
      name: "Ethereum (ETH)",
      price: 40000,
      image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
    },
    {
      id: 3,
      name: "BNB (BNB)",
      price: 30000,
      image: "https://cryptologos.cc/logos/bnb-bnb-logo.png?v=029",
    },
    {
      id: 4,
      name: "Dogecoin (DOGE)",
      price: 50000,
      image: "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=029",
    },
    {
      id: 5,
      name: "Litecoin (LTC)",
      price: 60000,
      image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=029",
    },
    {
      id: 6,
      name: "Cardano (ADA)",
      price: 70000,
      image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=029",
    },
    {
      id: 7,
      name: "OKB (OKB)",
      price: 50000,
      image: "https://cryptologos.cc/logos/okb-okb-logo.png?v=029",
    },
    {
      id: 8,
      name: "Quant (QNT)",
      price: 80000,
      image: "https://cryptologos.cc/logos/quant-qnt-logo.png?v=029",
    },
    {
      id: 9,
      name: "kava (KAVA)",
      price: 90000,
      image: "https://cryptologos.cc/logos/kava-kava-logo.png?v=029",
    },
    {
      id: 10,
      name: "FLOKI (FLOKI)",
      price: 60000,
      image: "https://cryptologos.cc/logos/floki-inu-floki-logo.png?v=029",
    },
  ],
  userPortfolio: [],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    buyCoin: (state, action) => {
      const { id, quantity } = action.payload;
      const coin = state.coins.find((coin) => coin.id === id);

      if (coin) {
        const existingCoin = state.userPortfolio.find((coin) => coin.id === id);

        if (existingCoin) {
          existingCoin.quantity += quantity;
        } else {
          state.userPortfolio.push({ ...coin, quantity });
        }
      }
    },
    exchangeCoin: (state, action) => {
      const { id, exid, quantity } = action.payload;
      const isCoin = state.coins.find((coin) => coin.id === exid);
      const isPortfolioIndex = state.userPortfolio.findIndex(
        (coin) => coin.id === id
      );

      if (isCoin && isPortfolioIndex !== -1) {
        const existingCoinIndex = state.userPortfolio.findIndex(
          (coin) => coin.id === exid
        );

        if (existingCoinIndex !== -1) {
          // Update the quantity of an existing coin in the portfolio
          state.userPortfolio[existingCoinIndex].quantity += quantity;
        } else {
          // Add a new coin to the portfolio
          state.userPortfolio.push({ isCoin, quantity });
        }

        // Remove the exchanged coin from the portfolio
        state.userPortfolio.splice(isPortfolioIndex, 1);
      }
    },
  },
});

export const { buyCoin, exchangeCoin } = cryptoSlice.actions;
export const selectCrypto = (state) => state.crypto;

export default cryptoSlice.reducer;
