import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data.map(item => item.title);
  }
);

const titleSlice=createSlice({
    name:"title",
    initialState:{
        items:[]
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.items=action.payload
        })
    }
})

export default titleSlice.reducer