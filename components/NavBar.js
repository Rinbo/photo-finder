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
          onPress={Actions.photos}
          title="Photos"
        >
          Photos
        </Button>
        <Button
          buttonStyle={{ marginTop: 20 }}
          onPress={Actions.settings}
          title="Settings"
        >
          Settings
        </Button>
        <Button
          buttonStyle={{ marginTop: 20 }}
          title="About"
          onPress={Actions.about}
        >
          About
        </Button>
      </View>
    );
  }
}

export default NavBar;
