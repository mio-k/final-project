import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  isRejectedWithValue,
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
  async (newItemParams, { rejectWithValue }) => {
    try {
      const response = await client.createItem(newItemParams);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Update Thunk
export const updateItem = createAsyncThunk(
  "items/updateItem",
  async (params) => {
    const response = await client.updateItem(
      params.id,
      params.updateItemParams
    );
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
      .addCase(saveNewItem.rejected, (state, action) => {
        // do nothing...
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
