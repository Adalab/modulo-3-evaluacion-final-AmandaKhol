import React, { useState, useEffect } from 'react';
import '../stylesheets/layout/_page.scss';
import getDataFromApi from '../services/getDataFromApi';
import rym from '../images/rym.png';
import Filter from './Filter';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [characterSelect, setCharacterSelect] = useState('');
  const [detailCharacter, setDetailCharacter] = useState({});

  useEffect(() => {
    getDataFromApi().then((data) => setCharacters(data));
  }, []);

  const handleSelect = (inputCharacter) => {
    setCharacterSelect(inputCharacter);
  };

  const handleDetailCharacter = (idCharacter) => {
    const detailCharacterSelected = characters.find(
      (character) => character.id === idCharacter
    );
    console.log(detailCharacterSelected);

    setDetailCharacter(detailCharacterSelected);
  };

  const filterCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(characterSelect.toLowerCase())
  );
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
        <Filter handleSelect={handleSelect} />
        <CharacterList
          characters={filterCharacters}
          handleDetailCharacter={handleDetailCharacter}
        />
        <CharacterDetail character={detailCharacter} />
      </main>
    </>
  );
};

export default App;
