import React from "react";
import { ScrollView, Image, Text } from "react-native";
import { connect } from "react-redux";
import { fetchPhotos } from "../actions";

export class PhotoView extends React.Component {
  renderPhotos = () => {
    const { photos } = this.props;
    return photos.map(photo => {
      return (
        <Image
          source={{ uri: photo.urls.small, height: 200, width: 300 }}
          key={photo.id}
          style={{ margin: 20 }}
        />
      );
    });
  };

  render() {
    const { photos } = this.props;
    if (!photos) {
      return null;
    } else {
      return (
        <ScrollView style={{ flex: 1, marginTop: 20, backgroundColor: this.props.theme.background}}>
          {this.renderPhotos()}
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = state => {
  return { photos: Object.values(state.photos), theme: state.theme };
};

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(PhotoView);
