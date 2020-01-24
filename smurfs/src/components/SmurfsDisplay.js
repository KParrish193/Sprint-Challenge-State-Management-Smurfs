import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'
import SmurfCard from './SmurfCard';


const SmurfsDisplay = props => {
    const store = useSelector(state => state.newReducer);
    const dispatch = useDispatch();
        

    useEffect(() => {
        dispatch(actionName())
    }, []);

        //display data from API
    return (

        <div>
        <h2>Visit the Smurfs</h2>
        <div>
            {store.smurf.map(item => {
                return (
                <SmurfCard 
                className="smurf-card"
                key={item.id} 
                name={item.name}
                height={item.height}
                age={item.age} />
                )}
            )}
        </div> 
        </div>
        
    );
};

export default SmurfsDisplay;