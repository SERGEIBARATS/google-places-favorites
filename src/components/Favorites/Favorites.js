import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ListOfFavorites from '../ListOfFavorites/ListOfFavorites';
import {
    deletePlace,
    deleteFavorite
  } from '../../store/actions/index';
import { connect } from "react-redux";


class Favorites extends Component{

    constructor(props) {
        super(props);
    }


    ContactSelectedDeleteContactHandler = Contactkey => {
        this.props.onDeletePlace(Contactkey);
      }

    ContactDeleteFavoriteHandler = Favoritekey => {
        this.props.onDeleteFavorite(Favoritekey);
      };
render(){

return (
    
    <View>
        <View>
        <Text>Here is the Favorites List:</Text>
        <ListOfFavorites
          Favorites={this.props.Favorites}
          onItemFavoriteSelected={this.ContactSelectedDeleteContactHandler}
          onItemDeleteFavoriteSelected={this.ContactDeleteFavoriteHandler}
        />
        
        </View>
        
    </View>
    
        );
     }
}



const mapStateToProps = state => {
    return {
      Favorites: state.places.Favorites
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDeletePlace: Contactkey => dispatch(deletePlace(Contactkey)),
      onDeleteFavorite: Favoritekey => dispatch(deleteFavorite(Favoritekey))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
  