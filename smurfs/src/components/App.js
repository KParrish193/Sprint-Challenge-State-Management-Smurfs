import React from "react";
import "./App.css";

import SmurfForm from './SmurfForm';
import SmurfsDisplay from './SmurfsDisplay';

function App() {
    return (
      <div className="App">
        <header>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </header>
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
