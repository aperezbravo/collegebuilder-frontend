// Imports
import React, { Component } from 'react';
import './general.css';

// Import Search Bar Components
//import SearchBar from 'material-ui-search-bar';

// Import React Scrit Libraray to load Google object
import Script from 'react-load-script';

class Search extends Component {
        // Define Constructor
        constructor(props) {
                super(props);

                // Declare State
                this.state = {
city: '',
      query: ''
                };

        }

        handleScriptLoad = () => {
                // Declare Options For Autocomplete
                const options = {
types: ['(cities)'],
                };

                // Initialize Google Autocomplete
                /*global google*/ // To disable any eslint 'google not defined' errors
                this.autocomplete = new google.maps.places.Autocomplete(
                                document.getElementById('autocomplete'),
                                options,
                                );

                // Avoid paying for data that you don't need by restricting the set of
                // place fields that are returned to just the address components and formatted
                // address.
                this.autocomplete.setFields(['address_components', 'formatted_address']);

                // Fire Event when a suggested name is selected
                this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
        }

        handlePlaceSelect = () => {

                // Extract City From Address Object
                const addressObject = this.autocomplete.getPlace();
                const address = addressObject.address_components;

                // Check if address is valid
                if (address) {
                        // Set State
                        this.setState(
                                        {
city: address[0].long_name,
query: addressObject.formatted_address,
}
);
                        }
}

render() {
        return (
                        <div>
                        <Script
                        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-WJb5hU-IWguo8KJiC8tb03OcIfN7Vjw&libraries=places"
                        onLoad={this.handleScriptLoad}
                        />

                        <div className="center">
                            <input id="autocomplete" placeholder="" hintText="Search City" value={this.state.query} />
</div>
</div>
);
        }
}

export default Search;
