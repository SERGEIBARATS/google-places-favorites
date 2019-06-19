import React from 'react';
import { View, FlatList } from 'react-native';

import ItemList from '../itemList/ItemList';
import { connect } from "react-redux";


const ListOfContacts = props => {
    return (
      <FlatList

        data={props.Contacts}
        renderItem={(info) => (
          <View><ItemList
            ContactName={info.item.name}
            ContactPhone={info.item.Phone}
            ContactAddress={info.item.Address}
            onItemPressed={() => props.onItemSelected(info.item.key)}
            onItemtoFavoritePressed={() => props.onItemFavoriteSelected(info.item.key)}
          />
          </View>
          
          )} 
      />
    );
  };

  const mapStateToProps = state => {
    return {
      Contacts: state.places.Contacts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDeletePlace: Contactkey => dispatch(deletePlace(Contactkey))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListOfContacts);
  