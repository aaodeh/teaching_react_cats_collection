import { Icon, InlineIcon } from "@iconify/react";
import grinningCat from "@iconify-icons/twemoji/grinning-cat";
import catWithWrySmile from "@iconify-icons/twemoji/cat-with-wry-smile";

const Header = () => {
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
        <Icon icon={catWithWrySmile} width={30} className="marker-icon" />
        <span style={{ fontSize: "2rem" }}>Thunder Cats</span>
        <Icon icon={catWithWrySmile} width={30} className="marker-icon" />
      </div>
    </header>
  );
};

export default Header;
