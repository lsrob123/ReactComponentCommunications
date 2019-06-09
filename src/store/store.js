import {
    createStore,
    combineReducers
} from "redux";
import someReducer from './some-reducer';

const rootReducer = combineReducers({
    someReducer
})

const store = createStore(rootReducer);
console.log(store.getState());

export default store;