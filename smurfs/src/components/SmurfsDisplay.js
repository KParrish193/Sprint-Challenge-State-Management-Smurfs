import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionName } from '../actions/index.js'
import SmurfCard from './SmurfCard';
import styled from 'styled-components'

const Village = styled.div`
background-color: #282c34;
`

const VillageCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`
const VillageHeader = styled.h2`
color: white;
padding: 2%;
`


const SmurfsDisplay = props => {
    const store = useSelector(state => state.newReducer);
    const dispatch = useDispatch();
        

    useEffect(() => {
        dispatch(actionName())
    }, []);

        //display data from API
    return (

        <Village>
        <VillageHeader>Smurf Village</VillageHeader>
        <VillageCards>
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
        </VillageCards> 
        </Village>
        
    );
};

export default SmurfsDisplay;