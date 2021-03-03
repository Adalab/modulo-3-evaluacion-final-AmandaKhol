import React, { useState, useEffect } from 'react';
import '../stylesheets/layout/_page.scss';
import getDataFromApi from '../services/getDataFromApi';
import rym from '../images/rym.png';

import CharacterDetail from './CharacterDetail';
import Browser from './Browser';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState('');
  const [detailCharacter, setDetailCharacter] = useState({});

  useEffect(() => {
    getDataFromApi().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacters(orderedData);
    });
  }, []);

  const handleSelect = (inputCharacter) => {
    setCharacterSelect(inputCharacter);
  };

  const handleDetailCharacter = (idCharacter) => {
    const detailCharacterSelected = characters.find(
      (character) => character.id === idCharacter
    );

    setDetailCharacter(detailCharacterSelected);
  };

  const filterCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(characterSelect.toLowerCase())
  );

  const renderBrowser = () => {
    return (
      <Browser
        inputValue={characterSelect}
        handleSelect={handleSelect}
        characters={filterCharacters}
        handleDetailCharacter={handleDetailCharacter}
      />
    );
  };

  const renderCharacter = (props) => {
    return <CharacterDetail character={detailCharacter} />;
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
          <Route exact path="/" render={renderBrowser} />
          <Route path="/detail/:id" render={renderCharacter} />
        </Switch>
      </main>
    </>
  );
};

export default App;
