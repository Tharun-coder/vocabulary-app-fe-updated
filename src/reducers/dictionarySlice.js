import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDictionaryAsync = createAsyncThunk(
  "dictionary/getDictAsync",
  async () => {
    let res = await fetch("https://vocabulary-app-be.herokuapp.com/dictionary");
    if (res.ok) {
      let dictData = await res.json();
      return dictData.data;
    }
  }
);

export const addWordtoDictAsync = createAsyncThunk(
  "dictionary/addWordtoDictAsync",
  async (payload) => {
    let res = await fetch(
      "https://vocabulary-app-be.herokuapp.com/dictionary",
      {
        method: "POST",
        body: JSON.stringify({ word: payload.word }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.ok) {
      let data = await res.json();
      console.log(data);
      return { data };
    }
  }
);

export const searchWordAsync = createAsyncThunk(
  "dictionary/searchWordAsync",
  async (payload) => {
    let res = await fetch(
      `https://vocabulary-app-be.herokuapp.com/dictionary/${payload.id}`
    );
    if (res.ok) {
      let wordData = await res.json();
      console.log(wordData);
      return wordData.data;
    }
  }
);

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getDictionaryAsync.fulfilled]: (state, action) => {
      return action.payload;
    },

    [getDictionaryAsync.pending]: (state, action) => {
      // console.log("Fetching Data");
    },
    [addWordtoDictAsync.fulfilled]: (state, action) => {
      try {
        state.push(action.payload.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export default dictionarySlice.reducer;
