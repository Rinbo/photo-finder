import React from "react";
import { StyleSheet, View } from "react-native";
import { Scene, Router, Reducer } from "react-native-router-flux";
import { connect } from "react-redux";
import PhotoSearch from "./components/PhotoSearch";
import Settings from "./components/Settings";
import About from "./components/About";
import TabIcon from "./components/TabIcon";

class Routes extends React.Component {

  render() {
    return (
      <View style={{ flex: 12 }}>
        <Router>
          <Scene
            key="root"
            tabs
            style={styles.container}
          >
            <Scene
              key="photos"
              component={PhotoSearch}
              parentIndex={1}
              initial
              title="Photos"
              icon={TabIcon}
            />
            <Scene
              key="settings"
              component={Settings}
              title="Settings"
              icon={TabIcon}
            />
            <Scene key="about" component={About} title="About" icon={TabIcon} />
          </Scene>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20
  },
  header: {
    fontSize: 20
  }
});

export default connect()(Routes);