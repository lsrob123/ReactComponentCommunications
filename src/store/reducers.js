import actionTypes from './action-types';

const previousState = {
    someText: "abc"
};

function mutate(state, payload) {
    return Object.assign({}, state, payload); // Replicate the state and assign new values
}

function rootReducer(state = previousState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_SOME_TEXT:
            return mutate(action.payload);
    }

    return state;
};


export default rootReducer;

