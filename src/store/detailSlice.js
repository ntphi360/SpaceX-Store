import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data:[]
}

const detailSlice = createSlice( {
  name:"detail",
  initialState,
  reducers:{
    setDetailData(state, action) {
      state.data = action.payload
    },
  }
  
}) 

export const { setDetailData } = detailSlice.actions
export default detailSlice.reducer