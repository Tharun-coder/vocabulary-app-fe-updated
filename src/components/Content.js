import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addWordtoDictAsync,
  searchWordAsync,
} from "../reducers/dictionarySlice";

import Table from "./Table";

function Content(props) {
  const dispatch = useDispatch();

  const [word, setWord] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (word === "") {
      alert("Please enter a word to proceed");
    } else {
      dispatch(addWordtoDictAsync({ word: word.toLowerCase() }));
      alert(`${word} added to dictionary`);
      setWord("");
    }
  };

  return (
    <div className="container content-wrapper">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <input
            type="text"
            id="word"
            onChange={(e) => setWord(e.target.value.replace(/[^A-Za-z]/gi, ""))}
            value={word}
            placeholder="Enter the word.."
            autoComplete="off"
          />
          <button className="btn-primary add-word" onClick={handleClick}>
            Add Word
          </button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <input
            type="text"
            id="search-word"
            placeholder="Search"
            onChange={(e) =>
              setSearchWord(e.target.value.replace(/[^A-Za-z]/, ""))
            }
            value={searchWord}
            autoComplete="off"
          />
        </div>
        <div className="col-lg-12 col-sm-12 table-content">
          <Table searchWord={searchWord} />
        </div>
      </div>
    </div>
  );
}

export default Content;
