import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

//Config
import configRedux from './configRedux'; 

//Styles
import "./index.css";

//App
import App from "./components/App";

const store = configRedux();

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById("root"));
