import { configureStore } from "@reduxjs/toolkit";
import SideBarReducer from "./SideBarSlice"
import categoryReducer from "./categorySlice";
import detailReducer from "./detailSlice"
import productReducer from "./productSlice";
import cartReducer from "./cartSlice"

export const store = configureStore({
  reducer:{
    sidebar:SideBarReducer,
    category: categoryReducer,
    detail: detailReducer,
    product:productReducer,
    cart:cartReducer,
  }
});

