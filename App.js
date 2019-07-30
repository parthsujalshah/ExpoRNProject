import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MainComponent from "./src/components/MainComponent.js";
import { connect, Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from "./src/reducers";

export default class App extends Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  };

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {

    return (
      <Provider store={createStore(reducers)}>
        <MainComponent />
      </Provider>
    );
  }
}


