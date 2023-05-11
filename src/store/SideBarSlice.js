import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   isDurum: true,
   setNavbar:false,
}

const SideBarSlice = createSlice({
 name:'sidebar',
 initialState,
  reducers:{
    openDurum(state,action){
      state.isDurum = action.payload
    },
    scrollColorNav(state,action){
      state.setNavbar = action.payload
    }

  }
});

export const { openDurum,scrollColorNav } = SideBarSlice.actions

export default SideBarSlice.reducer




