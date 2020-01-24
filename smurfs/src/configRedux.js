import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/';
import thunk from 'redux-thunk';

const configRedux = () => createStore(rootReducer, applyMiddleware(thunk));

export default configRedux;