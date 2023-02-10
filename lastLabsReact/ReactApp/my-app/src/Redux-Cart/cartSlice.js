import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { counter: 0, content: [], success: false },
  reducers: {
    addToCart: (state, action) => {
      let exists = false;
      for (let i = 0; i < state.content.length; i++) {
        if (state.content[i].id === action.payload.id) {
          state.content[i].count += +action.payload.count;
          exists = true;
          break;
        }
      }
      if (exists === false) {
        let DATA = {
          id: action.payload.id,
          description: action.payload.description,
          title: action.payload.title,
          tagsNames: action.payload.tagsNames,
          count: +action.payload.count,
        };
        state.content.push(DATA);
        state.counter++;
      }
    },
    incrementCount: (state, action) => {
      for (let i = 0; i < state.counter; i++) {
        if (+state.content[i]["id"] === +action.payload) {
          state.content[i]["count"]++;
          break;
        }
      }
    },
    decrementCount: (state, action) => {
      for (let i = 0; i < state.counter; i++) {
        if (+state.content[i]["id"] === +action.payload) {
          state.content[i]["count"]--;
          break;
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, incrementCount, decrementCount } = cartSlice.actions;

export default cartSlice.reducer;
