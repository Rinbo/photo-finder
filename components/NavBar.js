import React, { Component } from "react";
import { View, Button } from "react-native";
import { Actions } from "react-native-router-flux";

export class NavBar extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <Button onPress={Actions.photos} title="Photos" />
        <Button onPress={Actions.settings} title="Settings" />
        <Button title="About" onPress={Actions.about} />
      </View>
    );
  }
}

export default NavBar;
