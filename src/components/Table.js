import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDictionaryAsync } from "../reducers/dictionarySlice";

import TableItem from "./TableItem";

function Table({ searchWord }) {
  const dispatch = useDispatch();

  const dictData = useSelector((state) => state.dictionary);

  useEffect(() => {
    dispatch(getDictionaryAsync());
  }, [dispatch, dictData]);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Word</th>
          <th scope="col">Description</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {dictData &&
          dictData
            .filter((e) =>
              searchWord === ""
                ? e
                : e.word &&
                  e.word.toLowerCase().includes(searchWord.toLowerCase())
            )
            .map((item) => (
              <TableItem item={item} key={item.id} searchWord={searchWord} />
            ))}
        {/* <TableItem searchWord={searchWord} /> */}
      </tbody>
    </table>
  );
}

export default Table;
