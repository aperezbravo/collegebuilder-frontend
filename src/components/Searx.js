import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete';
import { withRouter } from 'react-router-dom';
//import { Route , withRouter} from 'react-router-dom';
//import { useHistory } from "react-router-dom";
import './general.css';
//import { withRouter } from 'react-router-dom';


class Searx extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: '',
      school: '',
      mainText: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = address => {
    //console.log(this.state);
    let add = address.split(',');
    console.log(address); 
    //console.log(add[0]+' '+add[1]);
    //Check if the school name has a comma, if so append the second word to the school name for search optimazation
    if(add[0] === 'California State University' && add[1] !== undefined) {  
      console.log('true');
      console.log(add[0]+add[1]);
      this.setState({ address: add[0]+add[1] });
    } else {
      this.setState({ address: add[0] });
    }
    this.setState({ mainText: address});
    //console.log(add[0]);
    //sets state to the name given in the address before the comma, does not work for all schools
    //this.setState({ address: add[0] });
  };

  stateChange(mainText) {
    this.setState({mainText: Text});
  }

  //not needed, used for forms delete later
  onSubmit = (event) => {
    console.log(this.address);
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.state.address);
    //this.props.history.push('/Wall/'+this.state.address);
    const sc = this.state.address;
    //console.log(sc);
    console.log(this.state.mainText);
    //console.log('send '+this.state.address+' to Wall component');
    console.log(this.props.location.pathname);
    console.log(this.props.location.pathname);
    console.log(this.state.mainText);
    //var expression = new RegExp("/Wall/"+"*");
    //console.log(this.props.location.pathname.split(' '));
    var path = this.props.location.pathname.split('/');
    console.log(this.props.location.pathname);
    //console.log(this.path.location.pathname);
    //if(this.props.location.pathname == '/Wall/') {
    //might have to revert back to 2 ==
    if(path[1] === 'Wall'){
      console.log('within Wall URL');
      //this.props.history.go(0);
      //this.props.history.replace('/Wall/'+this.state.address);
      this.props.history.push(this.state.address);
      this.props.history.go(0);
      //this.props.history.push('/Wall/'+this.state.address);
    } else {
      console.log(this.props.history);
      this.props.history.push({
        pathname: '/Wall/'+this.state.address,
        state: { 
          add: this.state.mainText,
          school: sc 
        }
      })
    }//else
    //this.props.history.replace('/');
    //this.props.history.go(0);
    //this.state.history.push('/Wall');
    //this.setState({ redirect: "/someRoute" });
    //this.props.history.push("/Wall");
    console.log('handle submit searx');
    }

    render() {
      return (
        <div className="canvas">
        <PlacesAutocomplete
          value={this.state.address}
          name={this.state.name}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
          onPress={this.handlePress}
        >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
          <input {...getInputProps({ placeholder: 'Search Schools...',})}></input>
          <button onClick={this.handleSubmit} className="search_button">submit</button> 
          <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map((suggestion) => {
          //console.log(suggestion);
          //{this.setState({mainText: suggestion.formattedSuggestion.mainText})}

          // inline style for demonstration purpose
          //css style for dropdown menu when hovering over each li
          const style = suggestion.active
          ? { backgroundColor: '#d8d8d8', cursor: 'pointer' }
          : { backgroundColor: '#ffffff', cursor: 'pointer' };
            //console.log(suggestion);

          return (
            <div key={ suggestion } className="input-suggestion" {...getSuggestionItemProps(suggestion, { style,})} >
            <i className="material-icons"></i> 
            <span>{suggestion.formattedSuggestion.mainText}</span>
            </div>
          );
                                                                })}
    </div>
    </div>
    )}
    </PlacesAutocomplete>
    </div>
    )
  }
}

export default withRouter(Searx); 
