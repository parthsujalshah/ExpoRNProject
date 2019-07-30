import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes';

const initiaState = {
    places: [],
    selectedPlace: null
};

const reducer = (state=initiaState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,   
                    image: {
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi0VNIpgEQf32aPh2OSYbtVT1oYIfoS46PWjMLBOVfuTUV16urMw"
                    }
                  })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                  return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case SELECT_PLACE: 
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                  return place.key === action.key;
            })
        };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    };
};
export default reducer;