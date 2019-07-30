import { ADD_PLACE, SELECT_PLACE, DELETE_PLACE, DESELECT_PLACE } from './actionTypes'

export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const selectPlace = (key) => {
    return {
        type: SELECT_PLACE,
        palceKey: key
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const deselectPlace = () => {
    type: DESELECT_PLACE
};