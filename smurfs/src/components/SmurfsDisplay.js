import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'
import SmurfCard from './SmurfCard';


const SmurfsDisplay = props => {
    const store = useSelector(state => state.newReducer);
    const dispatch = useDispatch();
        
        //display data from API
        console.log(store)
    return (

        <div>
        <h2>Smurfs</h2>
        <span>
            {store.data.map(item => {
                return (
                <SmurfCard 
                className="smurf-card"
                key={item.id} 
                name={item.name}
                height={item.height}
                age={item.age} />
                )}
            )}
        </span> 
        </div>
        
    );
};

export default SmurfsDisplay;