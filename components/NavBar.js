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
          alignItems: "flex-end"
        }}
      >
        <Button
          buttonStyle={{ marginTop: 20 }}
          rightIcon={{ name: "pets" }}
          title="Photos"
          onPress={() => {
            Actions.photos();
          }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          rightIcon={{ name: "pets" }}
          title="Settings"
          onPress={() => {
            Actions.settings();
          }}
        />
        <Button
          buttonStyle={{ marginTop: 20 }}
          rightIcon={{ name: "pets" }}
          title="About"
          onPress={() => {
            Actions.about();
          }}
        />
      </View>
    );
  }
}

export default NavBar;
