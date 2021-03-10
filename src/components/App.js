import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/layout/_page.scss';
import '../stylesheets/layout/_footer.scss';
import getDataFromApi from '../services/getDataFromApi';
import rym from '../images/rym.png';

import CharacterDetail from './CharacterDetail';
import Browser from './Browser';
import Warning from './Warning';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState('');
  const [speciesSelect, setSpeciesSelect] = useState('all');
  const [locationSelect, setLocationSelect] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacters(orderedData);
    });
  }, []);

  const handleReset = () => {
    setCharacterSelect('');
    setSpeciesSelect('all');
  };

  const handleLocation = (inputValue) => {
    const indexCity = locationSelect.indexOf(inputValue);
    if (indexCity === -1) {
      const newCities = [...locationSelect, inputValue];
      setLocationSelect(newCities);
    } else {
      const newCities = [...locationSelect];
      newCities.splice(indexCity, 1);
      setLocationSelect(newCities);
    }
  };

  const handleSelect = (inputId, inputValue) => {
    inputId === 'species'
      ? setSpeciesSelect(inputValue)
      : setCharacterSelect(inputValue);
  };

  const speciesList = characters.map((character) => character.species);
  const speciesListUnique = [...new Set(speciesList)];

  const locationList = characters.map((character) => character.origin);
  const locationListUnique = [...new Set(locationList)];

  const filterCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(characterSelect.toLowerCase())
    )
    .filter((character) =>
      speciesSelect === 'all' ? true : character.species === speciesSelect
    )
    .filter((character) => {
      console.log(locationSelect);
      console.log(character);
      if (locationSelect.length === 0) {
        return true;
      } else {
        return locationSelect.includes(character.origin);
      }
    });

  const renderCharacter = (routerProps) => {
    const routerCharacterId = routerProps.match.params.id;
    const routerCharacterIdInt = parseInt(routerCharacterId);
    const routerCharacterIdString = routerCharacterIdInt + '';
    const characterFound = characters.find(
      (character) => character.id === routerCharacterIdInt
    );
    return !characterFound ||
      routerCharacterIdString !== routerCharacterId ||
      isNaN(routerCharacterIdInt) ? (
      <Warning warningCode={400} />
    ) : (
      <CharacterDetail character={characterFound} />
    );
  };

  return (
    <>
      <header className="page__header">
        <img
          className="page__header--image"
          src={rym}
          alt="logo"
          title="logo"
        />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Browser
              inputValue={characterSelect}
              handleSelect={handleSelect}
              handleReset={handleReset}
              handleLocation={handleLocation}
              characters={filterCharacters}
              species={speciesListUnique}
              speciesSelect={speciesSelect}
              locations={locationListUnique}
              locationSelect={locationSelect}
            />
          </Route>
          <Route path="/detail/:id" render={renderCharacter} />
          <Route>
            <Warning warningCode={404} />
          </Route>
        </Switch>
      </main>
      <footer className="page__footer">
        <small>Adalab and Amanda Khol &copy; 2021</small>
      </footer>
    </>
  );
};

export default App;
