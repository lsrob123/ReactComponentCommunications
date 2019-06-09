export const actionTypes = {
    UPDATE_SOME_TEXT: 'UPDATE_SOME_TEXT'
};

// eg. store.dispatch(getUpdateSomeTextAction({ someText: "abc" }))
export function updateSomeTextAction(payload) {
    return {
        type: actionTypes.UPDATE_SOME_TEXT,
        payload: payload
    };
}

export const updateSomeText = ({
    payload
}) => updateSomeTextAction(payload);