import React, { useContext } from "react";
import { CatsContext } from "../App";

const SearchBox = ({ HandleSearchText }) => {
  return (
    <div className="searchBox">
      <div style={{ fontSize: "1em" }}>
        <label>search </label>
        <input
          onChange={HandleSearchText}
          type="text"
          style={{ fontSize: "1em" }}
        ></input>
      </div>
    </div>
  );
};

export default SearchBox;
