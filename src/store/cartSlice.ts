import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "cart1",
  initialState: {
    items: [],
  },
  reducers: {
    addProduct(state: any, action: any) {
      state.items.push(action.payload); // works
      //  state.items = [...state.items,action.payload] // works
      // state.items = [action.payload];
    },
    removeProduct(state: any, action: any) {
      console.log(state.items);
      state.items = state.items.filter((res) => {
        return res.info.id != action.payload.id;
      });
    },
    clearCart(state) {
      state.items.length = 0;
    },
  },
});

export const { addProduct, clearCart, removeProduct } = todosSlice.actions;
export default todosSlice.reducer;
