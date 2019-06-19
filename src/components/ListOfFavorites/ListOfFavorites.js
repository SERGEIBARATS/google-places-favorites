import React from 'react';
import { View, FlatList } from 'react-native';
import ItemFavorite from '../ItemFavorite/ItemFavorite';


const ListOfFavorites = props => {
    return (
      <FlatList

        data={props.Favorites}
        renderItem={(info) => (
          <View>
            <ItemFavorite
              ContactName={info.item.name}
              onItemFavoritePressed={() => props.onItemFavoriteSelected(info.item.key)}
              onItemDeleteFavoritePressed={() => props.onItemDeleteFavoriteSelected(info.item.key)}
            />
          </View>
          
        )}    
      />
    );
  };
  

  export default ListOfFavorites;
  