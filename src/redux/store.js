import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./ItemsSlice";

export const store = configureStore({
    reducer: ItemsSlice
})