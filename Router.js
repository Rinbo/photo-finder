import React from 'react'
import { View } from "react-native";
import { NativeRouter, Route, Switch, StyleSheet } from "react-router-native";

export const Router = () =>{
  return (
    <NativeRouter>
       <View style={styles.container}>
       <Switch>
          <Route path="/photos" component={PhotoSearch} />
          <Route path="/settings" component={Settings} />
          <Route path="/about" component={About} />
        </Switch>      
       </View>  
    </NativeRouter>

  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  }
});