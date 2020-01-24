import React from 'react';
import styled from 'styled-components';

const SmurfCard = (props) => {
    return ( 
    <div className="followerListContainer">
            {props.followers.map(item => {
                return (
                <div className="FollowerListBody">
                <h3>{store.data.name}</h3>
                <p>
                    Age: {store.data.age}
                    Height: {store.data.height} 
                </p>
                </div>
                )
            })
        }
    </div>
    )
};

export default SmurfCard;