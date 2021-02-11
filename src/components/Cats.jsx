import React from "react";
import SearchBox from "./SearchBox";
import CatCards from "./CatCards";

const Cats = ({ HandleSearchText, AddCat }) => {
  return (
    <div className="cats">
      <SearchBox HandleSearchText={HandleSearchText} />
      <CatCards AddCat={AddCat} />
    </div>
  );
};

export default Cats;
