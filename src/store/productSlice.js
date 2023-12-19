import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchProducts = createAsyncThunk("apis/fetchProducts", async () => {
  const response = await fetch(
    "https://arunkjojo.github.io/sample_api/products.json"
  );
  const data = await response.json();
  return data.products;
});

const productSlice = createSlice({
  name: "product",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export { fetchProducts };

// Export the reducer for the store configuration
export default productSlice.reducer;
