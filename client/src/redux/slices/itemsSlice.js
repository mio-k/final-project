import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import * as client from "../../lib/client";

const itemsAdapter = createEntityAdapter();

const initialState = itemsAdapter.getInitialState({
  status: "idle",
});

// Index + Show Thunk
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await client.fetchItems();
  return response;
});

// Create Thunk
export const saveNewItem = createAsyncThunk(
  "items/saveNewItem",
  async (newItemParams) => {
    const response = await client.createItem(newItemParams);
    return response;
  }
);

// Update Thunk
export const updateItem = createAsyncThunk(
  "items/updateItem",
  async ({ id, updateItemParams }) => {
    const response = await client.updateItem(id, updateItemParams);
    return response;
  }
);

// Delete Thunk
export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async ({ id }) => {
    const response = await client.deleteItem(id);
    return response;
  }
);

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
      })
      .addCase(saveNewItem.fulfilled, (state, action) => {
        const newItem = action.payload;
        state.entities[newItem.id] = newItem;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const { id, ...changes } = action.payload;
        itemsAdapter.updateOne(state, { id, changes });
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        const { id } = action.payload;
        itemsAdapter.removeOne(state, id);
      });
  },
});

export default itemsSlice.reducer;
