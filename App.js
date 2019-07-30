import React, {Component} from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

//RNRedux:
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
//Done

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends Component{

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

    const store = configureStore();
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <PlaceDetail 
            selectedPlace={this.props.selectedPlace}
            onItemDeleted={this.placeDeleteHandler}
            onModalClosed={this.modalClosedHandler}
          />
          <PlaceInput onPlaceAdded={this.placeAddedHandler} />
          <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places, //configureStore.js->places->reducers->places.js->places
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);