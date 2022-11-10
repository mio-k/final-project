// import {
//   createAsyncThunk,
//   createEntityAdapter,
//   createSlice,
// } from "@reduxjs/toolkit";
// import * as client from "../../lib/client";

// const dogAdapter = createEntityAdapter();

// const initialState = dogAdapter.getInitialState({
//   entities: [],
//   status: "idle",
// });

// export const fetchItems = createAsyncThunk("dogs/fetchdogs", async () => {
//   const response = await client.fetchItems();
//   return response;
// });

// const itemsSlice = createSlice({
//   name: "dogs",
//   initialState,
//   reducers: {
//     // omit reducer cases
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchItems.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(fetchItems.fulfilled, (state, action) => {
//         const newEntities = {};
//         action.payload.forEach((dog) => {
//           newEntities[dog.id] = dog;
//         });
//         state.entities = newEntities;
//         state.status = "idle";
//       });
//   },
// });
