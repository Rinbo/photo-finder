import React from "react";
import { StyleSheet } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import PhotoSearch from "./components/PhotoSearch";
import Settings from "./components/Settings";
import About from "./components/About";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" style={styles.container}>
        <Scene key="photos" component={PhotoSearch} parentIndex={1} initial />
        <Scene key="settings" component={Settings} title="Settings" />
        <Scene key="about" component={About} title="About" />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  }
});

export default RouterComponent;
