import { FETCH_TOGGLE, FETCH_SUCCESS } from '../actions/index.js';

const initialState = {
    smurf: [{name: "",
            age: "",
            height: "",
            id: 0,}],
    error: "",
    isFetching: false
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOGGLE:
            return {
                ...state,
                isFetching: !state.isFetching,
                error: action.payload ? action. payload : ""
            };
        case FETCH_SUCCESS:
            console.log("hamburger:")
            return {
                ...state,
                smurf: action.payload,
                isFetching: false, 
                error: ""
            }
        default: 
            return state
    }
};

export default asyncReducer;