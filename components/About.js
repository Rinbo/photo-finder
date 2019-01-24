import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

export const About = ({ theme }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.background
      }}
    >
      <Text style={{ fontSize: 40, color: theme.text }}>Awesome</Text>
      <Text style={{ fontSize: 40, color: theme.text }}>App</Text>
      <Text style={{ fontSize: 10, color: theme.text }}>v. 1.0.0</Text>
    </View>
  );
};

const mapStateToProps = state => {
  return { theme: state.theme };
};

export default connect(mapStateToProps)(About);
