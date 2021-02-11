import React, { useContext } from "react";
import CharacterCard from "./CharacterCard";
import { CatsContext } from "../App";

const CatCards = ({ AddCat }) => {
  const [state, setState] = useContext(CatsContext);
  return (
    <div className="catCards">
      <button onClick={AddCat}>Add a Cat</button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          justifyContent: "center"
        }}
      >
        {state.filteredCats &&
          state.filteredCats.map((c) => (
            <CharacterCard key={c.id} catData={c} />
          ))}
      </div>
    </div>
  );
};

export default CatCards;
