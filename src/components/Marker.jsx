import react from "react";
import { Icon, InlineIcon } from "@iconify/react";
import grinningCat from "@iconify-icons/twemoji/grinning-cat";

const Marker = ({ lat, lng, onClick }) => {
  return (
    <div className="marker" onClick={onClick}>
      <Icon icon={grinningCat} className="marker-icon" />
    </div>
  );
};

export default Marker;
