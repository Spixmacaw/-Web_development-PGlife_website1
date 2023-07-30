import React, { Component } from 'react';
import FilterBar from './FilterBar';
import FilterModal from './FilterModal';
import PropertyCard from './PropertyCard';
import NoProperty from './NoProperty';
import { base_path } from './utils.js';

class App extends Component {

  state = {
    properties: []
  };

  componentDidMount() {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const city_name = params.get('city');

    fetch(`${base_path}/api/get_properties_by_city.php?city=${city_name}`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          properties: responseData
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    let properties = [...this.state.properties];
    let property_cards;
    property_cards = properties.map(property =>
      <PropertyCard
        key={property.id}
        property={property}
      />
    );
    return (
      <>
        <div className="page-container">
          <FilterBar />

          {property_cards}
        </div>

        <FilterModal />
      </>
    );
  }
}

export default App;
