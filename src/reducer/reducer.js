export const initialState = [null, null];

export const reducer = (state, action) => {
    if (action.type === "USER") {
        console.log("user signed in")
        return [action.payload , action.payload2];
    }

    return state;
}