import React from 'react';
// import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CardBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
border: solid blue 2px;
min-width: 300px;
max-width: 300px; 
`
const CardHeader = styled.h3`
background-color: blue;
color: white;
`

const SmurfCard = props => {
    // const store = useSelector(state => state.newReducer);

    return ( 
        <CardBody className="card-container">        
        <CardHeader>{props.name}</CardHeader>
        <p>Age: {props.age}</p>
        <p>Height: {props.height}</p>
        </CardBody>
    );
};

export default SmurfCard;