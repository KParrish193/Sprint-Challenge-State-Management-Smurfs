import { FETCH_TOGGLE, FETCH_SUCCESS } from '../actions/index.js';

const initialState = {
    //may need to debug this later depending on data shape//
    smurf: {name: "",
            age: "",
            height: "",
            id: 0,},
    error: "",
    isFetching: false
};

const asyncReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOGGLE:
            console.log('hamburger')
            return {
                ...state,
                isFetching: !state.isFetching,
                error: action.payload ? action. payload : ""
            };
        case FETCH_SUCCESS:
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