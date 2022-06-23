
import { createStore } from 'redux';
import rootReducer from './Reducer';

let storeObject = createStore(rootReducer,2000)

export default storeObject;