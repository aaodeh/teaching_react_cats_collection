import React, { useContext } from "react";
import CharacterCard from "./CharacterCard";
import { CatsContext } from "../App";

const Duel = ({ filteredContacts }) => {
  const [state, setState] = useContext(CatsContext);

  return (
    <div
      className="duel"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      {state.allCats &&
        state.allCats
          .filter((c, i) => i < 2)
          .map((c) => <CharacterCard key={c.id} catData={c} />)}

      {/* <CharacterCard key={1} catData={Cat1} />
      <CharacterCard key={2} catData={Cat2} /> */}
    </div>
  );
};

export default Duel;
