// src/redux/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    coins: [
      { id: 1, name: 'Bitcoin', price: 50000, image: 'bitcoin-image-url' },
      // Add more cryptocurrency details as needed
    ],
    userPortfolio: [],
  },
  reducers: {
    buyCoin: (state, action) => {
      const { id, quantity } = action.payload;
      const coin = state.coins.find((c) => c.id === id);

      if (coin) {
        const existingCoin = state.userPortfolio.find((c) => c.id === id);

        if (existingCoin) {
          existingCoin.quantity += quantity;
        } else {
          state.userPortfolio.push({ ...coin, quantity });
        }
      }
    },
  },
});

export const { buyCoin } = cryptoSlice.actions;
export const selectCrypto = (state) => state.crypto;

export default cryptoSlice.reducer;
