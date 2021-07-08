const ADD_POINT = 'ADD_POINT';

const initialState = {
    count: 7
}
const pointReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POINT:
            return {
                ...state,
                count: state.count + 1
            }
        default: return state;
    }
}
export default pointReducer;