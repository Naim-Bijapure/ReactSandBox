import {createStore,applyMiddleware} from 'redux'
import {create} from 'redux-react-hook';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';
 
export const  store= createStore(reducer,applyMiddleware(reduxThunk));