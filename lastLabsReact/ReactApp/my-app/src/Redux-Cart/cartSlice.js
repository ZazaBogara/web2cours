import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        console.log(action.payload);
        console.log("action");
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addToCart } = cartSlice.actions
  
  export default cartSlice.reducer;