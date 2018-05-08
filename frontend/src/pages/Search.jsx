import React, { Component } from 'react';
import axios from 'axios';

import SearchForm from '../components/SearchForm';

class Search extends Component {
  render() {
    return (
      <div className="row" >
        <div class="col s12 m4 offset-m4">
          <div class="card">
            <div class="card-content">
              <SearchForm >
              </SearchForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;