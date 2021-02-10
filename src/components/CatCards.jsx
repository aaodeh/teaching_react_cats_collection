import React from "react";
import CharacterCard from "./CharacterCard";

const CatCards = ({ filteredContacts, handleSearchText, AddCat }) => {
  return (
    <div className="catCards">
      <div style={{ fontSize: "1em" }}>
        <label>search </label>
        <input
          onChange={handleSearchText}
          type="text"
          style={{ fontSize: "1em" }}
        ></input>
        <button onClick={AddCat}>Add a Cat</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          justifyContent: "center"
        }}
      >
        {filteredContacts.map((c, index) => (
          <CharacterCard key={c.id} catData={c} />
        ))}
      </div>
    </div>
  );
};

export default CatCards;
