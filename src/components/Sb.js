import React from 'react';
import Script from 'react-load-script';
import PlacesAutocomplete, {
        geocodeByAddress,
                getLatLng,
} from 'react-places-autocomplete';

class Searx extends React.Component {
        constructor(props) {
                super(props);
                this.state = { address: '' };
        }

        handleChange = address => {
                this.setState({ address });
        };

        handleSelect = address => {
                geocodeByAddress(address)
                        .then(results => getLatLng(results[0]))
                        .then(latLng => console.log('Success', latLng))
                        .catch(error => console.error('Error', error));
        };

        render() {
                return (
                <div>

<script src="https://maps.googleapis.com/maps/api/js?key=https://maps.googleapis.com/maps/api/js?key=AIzaSyC-WJb5hU-IWguo8KJiC8tb03OcIfN7Vjw&libraries=places&libraries=places&callback=initMap"></script>
                                <PlacesAutocomplete
                                value={this.state.address}
                                onChange={this.handleChange}
                                onSelect={this.handleSelect}
                                >
                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                <div>
                                                <input
                                                {...getInputProps({
placeholder: 'Search Places ...',
className: 'location-search-input',
})}
                                                />
                                                <div className="autocomplete-dropdown-container">
                                                {loading && <div>Loading...</div>}
                                                {suggestions.map(suggestion => {
                                                                const className = suggestion.active
                                                                ? 'suggestion-item--active'
                                                                : 'suggestion-item';
                                                                // inline style for demonstration purpose
                                                                const style = suggestion.active
                                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                                return (
                                                                                <div
                                                                                {...getSuggestionItemProps(suggestion, {
                                                                                                className,
                                                                                                style,
                                                                                                })}
                                                                                >
                                                                                <span>{suggestion.description}</span>
                                                                                </div>
                                                                       );
                                                                })}
</div>
</div>
)}
</PlacesAutocomplete>
</div>
);
}
}
 export default Searx;
