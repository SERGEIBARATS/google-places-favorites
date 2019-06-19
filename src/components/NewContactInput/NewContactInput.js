import React, { Component } from 'react';
import { Text, View } from 'react-native';
import NewContact from '../newContact/newContact';
import ListOfContacts from '../ListOfContacts/ListOfContacts';
import {
    addPlace,
    deletePlace,
    addFavorite
  } from '../../store/actions/index';
import { connect } from "react-redux";


class NewContactInput extends Component{

    ContactAddedHandler = Contact => {
        this.props.onAddPlace(Contact);

      };

    ContactAddFavoriteHandler = Favoritekey => {
        this.props.onAddFavorite(Favoritekey);
      };

    ContactSelectedDeleteHandler = Contactkey => {
        this.props.onDeletePlace(Contactkey);

      };
  render(){

    return (
        
        <View>
            <View>
            <Text>Hello!! new contact add to your list</Text>
            <NewContact onContactAdded={this.ContactAddedHandler} />
            <ListOfContacts
              Contacts={this.props.Contacts}
              onItemSelected={this.ContactSelectedDeleteHandler}
              onItemFavoriteSelected={this.ContactAddFavoriteHandler}
            />
            </View>
        </View>
            );
          }
    }

    const mapStateToProps = state => {
        return {
          Contacts: state.places.Contacts
        };
      };
      
      const mapDispatchToProps = dispatch => {
        return {
          onAddPlace: Contact => dispatch(addPlace(Contact)),
          onDeletePlace: Contactkey => dispatch(deletePlace(Contactkey)),
          onAddFavorite: Favoritekey => dispatch(addFavorite(Favoritekey))
        };
      };
      
  export default connect(mapStateToProps, mapDispatchToProps)(NewContactInput);
  