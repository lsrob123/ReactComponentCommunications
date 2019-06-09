import actionTypes from './action-types';

// eg. store.dispatch(getUpdateSomeTextAction({ someText: "abc" }))
export function getUpdateSomeTextAction(payload) {
    return {
        type: actionTypes.UPDATE_SOME_TEXT,
        payload: payload
    };
}