import {actionTypes} from './actions';

function mutate(state, payload) {
    return Object.assign({}, state, payload); // Replicate the state and assign new values
}

function someReducer(state = {
    someText: "abc"
}, action) {
    switch (action.type) {
        case actionTypes.UPDATE_SOME_TEXT:
            return mutate(action.payload);
    }

    return state;
};


export default someReducer; 


/* export const someReducer = (state = {
    someText: "abc"
}, action) => {

    switch (action.type) {
        case actionTypes.UPDATE_SOME_TEXT:
            return mutate(action.payload);

    }

    return state;
};*/