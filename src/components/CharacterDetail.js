import React from 'react';
import '../stylesheets/components/_character-detail.scss';

const CharacterDetail = (props) => {
  return (
    <section className="detail">
      <div className="detail__info">
        <h3>{props.character.name}</h3>
        <h4>Status: {props.character.status} </h4>
        <h4>Species: {props.character.species}</h4>
        <h4>Origin: {props.character.origin}</h4>
        <h4>Episodes: {props.character.episodes}</h4>
      </div>
      <img
        className="detail__photo"
        src={props.character.photo}
        alt={props.character.name + ' photo'}
        title={props.character.name + ' photo'}
      />
    </section>
  );
};

export default CharacterDetail;
