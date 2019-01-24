import React from "react";
import { View, Text } from "react-native";

export default class TabIcon extends React.Component {
  render() {
    const textStyle = {
      fontSize: 20
    };
    return (
      <View>
        <Text style={textStyle}>{this.props.title}</Text>
      </View>
    );
  }
}
