import React from "react";
import styled from 'styled-components';
import "./App.css";

import SmurfForm from './SmurfForm';
import SmurfsDisplay from './SmurfsDisplay';

const AppHeader = styled.div`
background-color: #282c34;
color: white;
margin: 0;
padding: 2%;
`

function App() {
    return (
      <div className="App">
        <AppHeader>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </AppHeader>

        <div className="input-smurfs">
        <SmurfForm />
        </div>
        
        <div className="display-smurfs">
        <SmurfsDisplay />
        </div>
      </div>
    );
}

export default App;
