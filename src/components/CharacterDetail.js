import React from 'react';
import '../stylesheets/components/_character-detail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <section className="detail">
      <Link className="detail__card--return" to="/">
        Volver
      </Link>
      <div className="detail__card">
        <div className="detail__card--info">
          <h3>{props.character.name}</h3>
          <h4>Status: {props.character.status} </h4>
          <h4>Species: {props.character.species}</h4>
          <h4>Origin: {props.character.origin}</h4>
          <h4>Episodes: {props.character.episodes}</h4>
        </div>
        <img
          className="detail__card--photo"
          src={props.character.photo}
          alt={props.character.name + ' photo'}
          title={props.character.name + ' photo'}
        />
      </div>
    </section>
  );
};

export default CharacterDetail;
