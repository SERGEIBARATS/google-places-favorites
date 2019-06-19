import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import MapInput from '../SearchPlace/MapInput';
class newContact extends Component {
  state = {
    ContactName: "",
    ContactPhone: "",
    ContactAddress: ""
  };


  ContactNameChangedHandler = val => {
    this.setState({
        ContactName: val
    });
  };

  ContactPhoneChangedHandler = val => {
    this.setState({
        ContactPhone: val
    });
  };

  ContactAddressChangedHandler = val => {
    this.setState({
        ContactAddress: val
    });
  };

  ContactSubmitHandler = () => {
    if (this.state.ContactName.trim() === "") {
      return;
    }

    var person ={name:this.state.ContactName,
                 Phone: this.state.ContactPhone,
                 Address: this.state.ContactAddress}

    this.props.onContactAdded(person);
  };
  

  render() {
    const styles = StyleSheet.create({
      inputItem: {
        width: "100%",
        marginBottom: 5,
        padding: 6,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      },
      buttonItem: {
        width: "100%",
        marginBottom: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

      },
      placeImage: {
        //top: "10px"
      }
    });
    return (
      <View style={styles.placeImage}>
        <View style={styles.inputItem}>
              <TextInput
                placeholder="press Name"
                value={this.state.ContactName}
                onChangeText={this.ContactNameChangedHandler}
              />
        </View>
        <View style={styles.inputItem}>
              <TextInput
                placeholder="press Phone"
                value={this.state.ContactPhone}
                onChangeText={this.ContactPhoneChangedHandler}
              />
        </View>
        <View style={styles.inputItem}>
              <MapInput handler={this.ContactAddressChangedHandler}/>
        </View>
        <View style={styles.buttonItem}>
              <Button
                title="Add"
                onPress={this.ContactSubmitHandler}
              />
        </View>
                
      </View>
    );
  }
}

export default newContact;
