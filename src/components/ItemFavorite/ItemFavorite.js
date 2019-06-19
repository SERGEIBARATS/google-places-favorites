import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonItem: {

    marginBottom: 3,
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  listContainer: {
         width: "100%",
         borderRadius: 4,
          borderWidth: 0.5,
          borderColor: '#d6d7da',
       },
       text: {
         fontSize: 15,
         fontWeight: 'bold',
       },

});

const ItemFavorite = props => (
  
    <View style={styles.listContainer}>
      <Text style={styles.text}>
            {props.ContactName}
      </Text>
      <Button style={styles.buttonItem}
            title="delete Contact"
            onPress={props.onItemFavoritePressed}
      />
      <Button style={styles.buttonItem}
            title="delete from Favorite"
            onPress={props.onItemDeleteFavoritePressed}
      />
    </View>
  
);


export default ItemFavorite;
