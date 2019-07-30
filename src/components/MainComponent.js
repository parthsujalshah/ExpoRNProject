import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import PlaceDetail from "./PlaceDetail/PlaceDetail";
import PlaceInput from "./PlaceInput/PlaceInput";
import PlaceList from "./PlaceList/PlaceList";
import { connect } from "react-redux";
import { addPlace, deletePlace, selectPlace, deselectPlace } from '../actions';

class MainComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.placeDeleteHandler}
                    onModalClosed={this.modalClosedHandler}
                />
                <PlaceInput onPlaceAdded={this.placeAddedHandler} />
                <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places, //configureStore.js->places->reducers->places.js->places
        selectedPlace: state.places.selectedPlace
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
