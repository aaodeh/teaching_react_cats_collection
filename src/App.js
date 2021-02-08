import "./styles.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import * as CatData from "./data";
import * as utils from "./helpers.js";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [filteredContacts, setFilteredContacts] = useState([]);

  const [contacts, setContacts] = useState([]);

  const handleCatClick = (id) => {
    setFilteredContacts(
      filteredContacts.map((contact) =>
        contact.id === id
          ? { ...contact, imageId: Math.random() * 10000000000 }
          : contact
      )
    );
  };

  const handleSearchText = (e) => {
    if (e.target.value !== "") {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else setFilteredContacts(contacts);
  };

  const handleAddCat = () => {
    let newCat = createNewCat();

    setContacts((cats) => [...cats, newCat]);
  };

  function createNewCat() {
    let countries = CatData.countires;
    let countiesCount = CatData.countires.length - 1;
    let randomCountry = countries[utils.getRandomInt(countiesCount)];

    let attack = Math.random() * 3 + 1;
    let defense = Math.random() * 3 + 1;
    let speed = Math.random() * 3 + 1;

    let rank = Math.round((attack + defense + speed) * (100 / 12));

    let cat = {
      name: utils.projectname(),
      id: uuidv4(),
      attack: attack,
      defense: speed,
      speed: defense,
      rank: rank,
      country: {
        name: randomCountry.name,
        code: randomCountry.code,
        lat: randomCountry.lat,
        lng: randomCountry.lng
      }
    };

    return cat;
  }

  useEffect(() => {
    // Update the document title using the browser API

    let countries = CatData.countires;
    let countiesCount = CatData.countires.length - 1;

    let preloadedCats = [];

    for (let i = 1; i <= 15; i++) {
      let randomCountry = countries[utils.getRandomInt(countiesCount)];

      let attack = Math.random() * 3 + 1;
      let defense = Math.random() * 3 + 1;
      let speed = Math.random() * 3 + 1;

      let rank = Math.round((attack + defense + speed) * (100 / 12));

      let cat = {
        name: utils.projectname(),
        id: uuidv4(),
        attack: attack,
        defense: speed,
        speed: defense,
        rank: rank,
        country: {
          name: randomCountry.name,
          code: randomCountry.code,
          lat: randomCountry.lat,
          lng: randomCountry.lng
        }
      };

      preloadedCats.push(cat);
    }

    setContacts(preloadedCats);
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    setFilteredContacts(contacts);
  }, [contacts]);

  return (
    <div className="App">
      <Header AddCat={handleAddCat} />
      <div style={{ fontSize: "1em" }}>
        <label>search </label>
        <input
          onChange={handleSearchText}
          type="text"
          style={{ fontSize: "1em" }}
        ></input>
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
          <CharacterCard
            key={c.id}
            catData={c}
            onChangeImage={handleCatClick}
          />
        ))}
      </div>

      <Map data={contacts} style={{ height: 100, width: 100 }} />
    </div>
  );
}
