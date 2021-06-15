import React from "react";

import List from "./List";

function Content({ searchWord }) {
  return (
    <div className="container content-wrapper">
      <div className="row wordlist">
        <div className="col-lg-12 col-sm-12 ">
          <h6>Words List</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-sm-12 table-content">
          <List searchWord={searchWord} />
        </div>
      </div>
    </div>
  );
}

export default Content;
