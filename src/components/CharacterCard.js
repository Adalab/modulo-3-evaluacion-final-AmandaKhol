import React from 'react';
import '../stylesheets/components/_character-card.scss';

const CharacterCard = (props) => {
  const handleClick = () => {
    return props.handleDetailCharacter(props.character.id);
  };

  return (
    <section className="character__item" onClick={handleClick}>
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
    </section>
  );
};

export default CharacterCard;
