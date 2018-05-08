import React from 'react';

const SearchForm = ({ children, location, selectValue, handleChange }) => {
  return (
    <div className="input-field">
      <select value={selectValue} name={location + "Select"} onChange={handleChange} >
        <option value="default" disabled>Select {location}</option>
        { children }
      </select>
      <label>{location.charAt(0).toUpperCase() + location.slice(1)}</label>
    </div>
  )
}

export default SearchForm;