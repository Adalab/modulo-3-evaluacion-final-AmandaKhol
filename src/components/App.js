import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/layout/_page.scss';
import getDataFromApi from '../services/getDataFromApi';
import rym from '../images/rym.png';

import CharacterDetail from './CharacterDetail';
import Browser from './Browser';
import PageNotFound from './PageNotFound';
import CharacterNotFound from './CharacterNotFound';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState('');
  const [speciesSelect, setSpeciesSelect] = useState('all');

  useEffect(() => {
    getDataFromApi().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacters(orderedData);
    });
  }, []);

  const handleSelect = (inputId, inputValue) => {
    inputId === 'species'
      ? setSpeciesSelect(inputValue)
      : setCharacterSelect(inputValue);
  };

  const speciesList = characters.map((character) => character.species);
  const speciesListUnique = [...new Set(speciesList)];

  const filterCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(characterSelect.toLowerCase())
    )
    .filter((character) =>
      speciesSelect === 'all' ? true : character.species === speciesSelect
    );

  const renderCharacter = (routerProps) => {
    const routerCharacterId = routerProps.match.params.id;
    const characterFound = characters.find(
      (character) => character.id === parseInt(routerCharacterId)
    );
    if (characterFound) {
      return <CharacterDetail character={characterFound} />;
    } else {
      return <CharacterNotFound />;
    }
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
              characters={filterCharacters}
              species={speciesListUnique}
            />
          </Route>
          <Route path="/detail/:id" render={renderCharacter} />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
