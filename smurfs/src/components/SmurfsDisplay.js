import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'


const SmurfsDisplay = props => {
    const store = useSelector(state => state.newReducer);
    const dispatch = useDispatch();
        
        //display data from API
    return (

        <div>
        <span>{store}</span>
        </div>
        
    );
};

export default SmurfsDisplay;