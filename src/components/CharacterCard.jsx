// import { Icon, InlineIcon } from "@iconify/react";
// import grinningCat from "@iconify-icons/twemoji/grinning-cat";
import React from "react";
import * as utils from "../helpers.js";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import RatingBox from "./ratingBox";

const CardStyle = {
  border: "1px solid black",
  padding: "20px",
  margin: "20px",
  width: "160px",
  height: "250px"
};

const CharacterCard = ({ catData }) => {
  const {
    id,
    name,
    phone,
    imageId,
    attack,
    defense,
    speed,
    country,
    rank
  } = catData;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip
      className="characterCard"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div
        style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardFront"
      >
        <div>
          <img
            src={`https://robohash.org/${name
              .split(" ")
              .join("")}.png?set=set4&size=150x150&bgset=bg1`}
            alt="avatar"
          />
          <div style={{ padding: "5px 0px" }}>
            <strong>{name}</strong>
          </div>
          <div style={{ padding: "5px 0px" }}>{country.name}</div>
          <div>
            <strong>Ranking: </strong>
            {rank}
          </div>
          {/* <button onClick={() => onChangeImage(id)}>Change Image </button> */}
        </div>
      </div>
      <div
        style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack"
      >
        {/* This is the back of the card. */}
        <div
          style={{
            height: "100%",
            flexDirection: "column",
            alignContent: "space-between"
          }}
        >
          {/* <div className="cardTitle">{name}</div>
          <div className="cardLabel">Power move</div>
          <div className="cardValue">{powerMove}</div>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
            value={(Math.random() * 2) + 3}
          /> */}
          <div className="cardTitle">{name}</div>
          <RatingBox title={"Attack"} rating={attack} />
          <RatingBox title={"Defense"} rating={defense} />
          <RatingBox title={"Speed"} rating={speed} />
          <div className="cardTitle" style={{ marginTop: "15px" }}>
            Rank: {rank}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default CharacterCard;
