import {createStore, combineReducers} from 'redux';
import {authReducer} from './authReducer';
import { gadgetReducer } from './gadgetReducer';


const reducer = combineReducers({
    auth: authReducer,
    gadgets: gadgetReducer
})



//creates the store
export const store = createStore(reducer, 
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());