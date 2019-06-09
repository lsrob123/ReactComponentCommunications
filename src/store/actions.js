export const actionTypes = {
    UPDATE_SOME_TEXT: 'UPDATE_SOME_TEXT'
};

// eg. store.dispatch(getUpdateSomeTextAction({ someText: "abc" }))
export function getUpdateSomeTextAction(payload) {
    return {
        type: actionTypes.UPDATE_SOME_TEXT,
        payload: payload
    };
}