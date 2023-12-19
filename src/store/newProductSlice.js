import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchNewProducts = createAsyncThunk("apis/fetchNewProducts", async () => {
  const response = await fetch(
    "https://arunkjojo.github.io/sample_api/newLaunchedProducts.json"
  );
  const data = await response.json();
  return data.newProducts;
});

const newProductSlice = createSlice({
  name: "newProduct",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchNewProducts };

// Export the reducer for the store configuration
export default newProductSlice.reducer;
