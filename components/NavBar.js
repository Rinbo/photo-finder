import React, { Component } from "react";
import { Link } from "react-router-native";
import { View } from "react-native";

export class NavBar extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <Link to="/photos">Photos</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/about">About</Link>
      </View>
    );
  }
}

export default NavBar;
