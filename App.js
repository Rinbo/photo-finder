import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Router from "./Router";
import NavBar from "./components/NavBar";

export default class App extends React.Component {
  render() {
    const store = createStore(reducers, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1}}>
          <Router />
          <NavBar />
        </View>
      </Provider>
    );
  }
}
