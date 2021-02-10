import React from "react";
import CharacterCard from "./CharacterCard";

const Duel = ({ filteredContacts }) => {
  let catData = filteredContacts.pop();

  return (
    <div
      className="duel"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <CharacterCard catData />
      <CharacterCard catData />

      {/* <CharacterCard key={1} catData={Cat1} />
      <CharacterCard key={2} catData={Cat2} /> */}
    </div>
  );
};

export default Duel;
