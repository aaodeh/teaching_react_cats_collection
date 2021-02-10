import { Icon, InlineIcon } from "@iconify/react";
import grinningCat from "@iconify-icons/twemoji/grinning-cat";
import catWithWrySmile from "@iconify-icons/twemoji/cat-with-wry-smile";

const Header = ({ AddCat, CatDuel }) => {
  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px"
        }}
      >
        <span>
          <button onClick={CatDuel}>Start Duel</button>
        </span>
        <div>
          <Icon icon={catWithWrySmile} width={30} className="marker-icon" />
          <span style={{ fontSize: "2rem" }}>Cat Collectables</span>
          <Icon icon={catWithWrySmile} width={30} className="marker-icon" />
        </div>
        <span>
          <button onClick={AddCat}>Add a Cat</button>
        </span>
      </div>
    </header>
  );
};

export default Header;
