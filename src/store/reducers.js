import * as actions from './actions';

const previousState = {
    someText: "abc"
};

function mutate(state, payload) {
    return Object.assign({}, state, payload); // Replicate the state and assign new values
}

function rootReducer(state = previousState, action) {
    switch (action.type) {
        case actions.actionTypes.UPDATE_SOME_TEXT:
            return mutate(action.payload);
    }

    return state;
};


export default rootReducer;

