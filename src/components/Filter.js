import React from 'react';
import '../stylesheets/components/_filter.scss';

const Filter = (props) => {
  const handleChange = (ev) => {
    return props.handleSelect(ev.target.id, ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const renderSpeciesOptions = () => {
    return props.species.map((species, index) => {
      return (
        <option key={index} value={species}>
          {species}
        </option>
      );
    });
  };
  return (
    <div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <fieldset className="form__fieldset">
          <label htmlFor="character">Search a character:</label>
          <input
            className="form__input"
            id="character"
            type="text"
            value={props.inputValue}
            onChange={handleChange}
            placeholder="Name..."
          />
        </fieldset>

        <fieldset className="form__fieldset">
          <label htmlFor="species">Select the species:</label>
          <select
            className="form__select"
            name="species"
            id="species"
            onChange={handleChange}
          >
            <option value="all">-</option>
            {renderSpeciesOptions()}
          </select>
        </fieldset>
      </form>
    </div>
  );
};

export default Filter;
