import axios from 'axios';

export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

//action creator
export const actionName = () => dispatch => {
    dispatch({ type: FETCH_TOGGLE });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => { 
            console.log(res.data)
            dispatch ({ type: FETCH_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }))
};