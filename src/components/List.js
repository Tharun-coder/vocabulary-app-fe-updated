import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDictionaryAsync } from "../reducers/dictionarySlice";
import ListItems from "./ListItems";

function List({ searchWord }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const dictData = useSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(getDictionaryAsync());
  }, [dispatch, dictData]);

  return (
    <div className="container list-container">
      {dictData &&
        dictData
          .filter((e) =>
            searchWord === ""
              ? e
              : e.word &&
                e.word.toLowerCase().includes(searchWord.toLowerCase())
          )
          .map((item) => <ListItems item={item} />)}
    </div>
  );
}

export default List;
