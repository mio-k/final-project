// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   description: "",
//   user: "",
//   tags: [],
// };

// const freeItemSlice = createSlice({
//   name: "freeItem",
//   initialState,
//   reducers: {
//     // To be filled in
//   },
// });
// export default freeItemSlice.reducer;

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import * as client from "../../lib/client";

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
  entities: [],
  status: "idle",
});

export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await client.fetchItems();
  return response;
});

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        const newEntities = {};
        action.payload.forEach((item) => {
          newEntities[item.id] = item;
        });
        state.entities = newEntities;
        state.status = "idle";
      });
  },
});

export const saveNewItem = createAsyncThunk(
  "items/saveNewItem",
  async (newItemParams) => {
    const response = await client.createItem(newItemParams);
    return response;
  }
);

// export const { allTodosCompleted, completedTodosCleared } = itemsSlice.actions;

export default itemsSlice.reducer;
