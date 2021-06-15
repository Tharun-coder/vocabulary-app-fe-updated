import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./dictionarySlice";

export default configureStore({
  reducer: {
    dictionary: dictionaryReducer,
  },
});
