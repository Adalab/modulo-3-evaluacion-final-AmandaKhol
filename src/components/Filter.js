import React from 'react';
import '../stylesheets/components/_filter.scss';

const Filter = (props) => {
  const handleChange = (ev) => {
    return props.handleSelect(ev.target.value);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <div>
      <form className="form" action="" onSubmit={handleSubmit}>
        <label htmlFor="character"></label>
        <input
          className="form__input"
          id="character"
          type="text"
          value={props.inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Filter;
