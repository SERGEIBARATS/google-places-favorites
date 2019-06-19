import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 

class MapInput extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
        <GooglePlacesAutocomplete
          placeholder="Search Place"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
          listViewDisplayed="false" // true/false/undefined
          fetchDetails={true}
          renderDescription={(row) => row.description || row.vicinity}
          onPress={(data, details = null) => {
            console.log(data.description);
            this.props.handler(data.description);
          }}
          query={{
            key: 'AIzaSyBaURd1lT2vmuKkAAQnOAhvZ7T6-PEJ-44',
            language: 'en', // language of the results
            types: '(cities)',
           // types: '(cities)', // default: 'geocode'
          }}
          getDefaultValue={() => {
            return ''; // text input default value
            }}
            GooglePlacesDetailsQuery={{
              // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
              fields: 'formatted_address',
            }}
            styles={{
              textInputContainer: {
                backgroundColor: 'rgba(0,0,0,0)',
                borderTopWidth: 0,
                borderBottomWidth:0
              },
              textInput: {
                marginLeft: 0,
                marginRight: 0,
                height: 38,
                color: '#5d5d5d',
                fontSize: 16
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              },
            }}
      
          nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
          debounce={200}
        />
      
    );
  }
}
export default MapInput;

