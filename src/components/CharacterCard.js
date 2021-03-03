import React from 'react';
import '../stylesheets/components/_character-card.scss';
import { Link } from 'react-router-dom';

const CharacterCard = (props) => {
  const handleClick = () => {
    return props.handleDetailCharacter(props.character.id);
  };

  return (
    <Link
      to={`/character/${props.character.id}`}
      className="character__item"
      onClick={handleClick}
    >
      <div className="character__item--header">
        <h3 className="character__item--title">{props.character.name}</h3>
        <h4 className="character__item--species">{props.character.species}</h4>
      </div>
      <img
        className="character__item--image"
        src={props.character.photo}
        alt={props.character.name + ' photo'}
        title={props.character.name + ' photo'}
      />
    </Link>
  );
};

export default CharacterCard;
