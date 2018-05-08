import React from 'react';

const SearchForm = ({ children, location }) => {
  return (
    <form >
      <div className="input-field">
        <select>
          <option value="default" disabled>Select your {location} location</option>
          { children }
        </select>
        <label>{location.charAt(0).toUpperCase() + location.slice(1)}</label>
      </div>
    </form>
  )
}

export default SearchForm;