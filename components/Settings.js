import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { setTheme } from "../actions";
import { connect } from "react-redux";

export class Settings extends Component {
  onSetTheme = color => {
    this.props.setTheme(color);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: this.props.theme.background
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 30 }}>Choose theme</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <TouchableHighlight onPress={() => this.onSetTheme("dark")}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: "black",
                borderColor: "white",
                borderWidth: 1,
                margin: 20
              }}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.onSetTheme("light")}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "black",
                margin: 20
              }}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { theme: state.theme };
};

export default connect(
  mapStateToProps,
  { setTheme }
)(Settings);
