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

const ItemList = props => (
  
    <View style={styles.listContainer}>
       <View>
              <Text style={styles.text}>  
                     Contact: {props.ContactName}{" "} 
                     Phone: {props.ContactPhone}{"\n"}
                     Address: {props.ContactAddress} 
              </Text>
       </View>
     <View style={styles.buttonItem}>
       <Button
              title="delete Contact"
              onPress={props.onItemPressed}
       />
      </View>
      <View style={styles.buttonItem}>
      <Button
             title="add to Favorite"
             onPress={props.onItemtoFavoritePressed}
      />
      </View>
    </View>
  
);

export default ItemList;
