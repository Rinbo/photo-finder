import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  Keyboard,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { fetchPhotos } from "../actions";
import PhotoView from "./PhotoView";

export class PhotoSearch extends React.Component {
  state = {
    searchString: ""
  };

  onSearch = () => {
    const { fetchPhotos } = this.props;
    fetchPhotos(this.state.searchString);
    this.setState({ searchString: "" });
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", backgroundColor: this.props.theme.background, color: this.props.theme.text }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 15
          }}
        >
          <View>
            <TextInput
              style={styles.textInput}
              value={this.state.searchString}
              onChangeText={searchString => {
                this.setState({ searchString });
              }}
              placeholder="Search"
              keyboardType="web-search"
              onSubmitEditing={() => this.onSearch()}
              ref="searchBar"
            />
          </View>
          <TouchableHighlight
            onPress={() => this.onSearch()}
            underlayColor="white"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </TouchableHighlight>

        </View>
        <PhotoView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center"
  },
  textInput: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 200,
    height: 50,
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey"
  },
  button: {
    marginLeft: 15,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
    borderRadius: 10
  },
  buttonText: {
    color: "white",
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return { photos: Object.values(state.photos), theme: state.theme };
};

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(PhotoSearch);
