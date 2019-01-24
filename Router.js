import React from "react";
import { StyleSheet, View } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import { connect } from "react-redux";
import PhotoSearch from "./components/PhotoSearch";
import Settings from "./components/Settings";
import About from "./components/About";
import TabIcon from "./components/TabIcon";

const RouterComponent = () => {
  return (
    <View style={{ flex: 12 }}>
      <Router>
        <Scene key="root" style={styles.container}>
          <Scene
            key="photos"
            component={PhotoSearch}
            parentIndex={1}
            initial
            title="Photos"
          />
          <Scene
            key="settings"
            component={Settings}
            title="Settings"
          />
          <Scene key="about" component={About} title="About"  />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  header: {
    fontSize: 20
  }
});

export default connect()(RouterComponent);
