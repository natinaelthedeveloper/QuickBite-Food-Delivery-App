import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',

  initialState,

  reducers: {
    // Add dish to cart
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    // Remove one dish from cart
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item._id === action.payload.id
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    // Remove everything from cart
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

// Actions
export const {
  addToCart,
  removeFromCart,
  emptyCart,
} = cartSlice.actions;


// ===============================
// SELECTORS
// ===============================

// Get all cart items
export const selectCartItems = (state) => state.cart.items;


// Get total price
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + Number(item.price || 0),
    0
  );


// Get items for one specific dish
export const selectCartItemsById = createSelector(
  [
    (state) => state.cart.items,
    (_, id) => id,
  ],
  (items, id) => items.filter((item) => item._id === id)
);


// Export reducer
export default cartSlice.reducer;