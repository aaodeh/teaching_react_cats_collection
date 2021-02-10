import "./styles.css";
import { useState, useEffect } from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import * as CatData from "./data";
import * as utils from "./helpers.js";
import { v4 as uuidv4 } from "uuid";
import Main from "./components/Main";

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
    e.preventDefault();
    if (e.target.value !== "") {
      setFilteredContacts(
        contacts.filter((contact) =>
          contact.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else setFilteredContacts(contacts);
  };

  const handleAddCat = (e) => {
    e.preventDefault();
    let newCat = createNewCat();
    alert("got here");
    setContacts((cats) => [...cats, newCat]);
  };

  const handleCatDuel = () => {
    let outcome = utils.battle(filteredContacts[0], filteredContacts[1]);

    console.log(outcome);

    outcome.log.map((l, index) => {
      setTimeout(() => {
        console.log(
          `${l.attacker} attacks and hits with ${l.damage} hp damage `
        );
      }, 1000 * index);
    });

    setTimeout(() => {
      console.log(`Winner is ${outcome.winner.name}`);
    }, 1000 * outcome.log.length);
  };

  function createNewCat() {
    let countries = CatData.countires;
    let countiesCount = CatData.countires.length - 1;
    let randomCountry = countries[utils.getRandomInt(countiesCount)];

    let attack = Math.random() * 2 + 2;
    let defense = Math.random() * 2 + 2;
    let speed = Math.random() * 2 + 2;

    let rank = Math.round((attack + defense + speed) * (100 / 12));

    let cat = {
      name: utils.projectname(),
      id: uuidv4(),
      created: Date.now(),
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
      let newCat = createNewCat();
      preloadedCats.push(newCat);
    }

    setContacts(preloadedCats);
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
    const sorted = [...contacts].sort((a, b) => {
      return b.created - a.created;
    });
    setFilteredContacts(sorted);
  }, [contacts]);

  return (
    <div className="App">
      <Header AddCat={handleAddCat} CatDuel={handleCatDuel} />

      <Main
        filteredContacts={filteredContacts}
        handleSearchText={handleSearchText}
        handleCatClick={handleCatClick}
        AddCat={handleAddCat}
      />
    </div>
  );
}
