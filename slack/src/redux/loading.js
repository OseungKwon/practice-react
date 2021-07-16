const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = (requestType) => ({
    type: START_LOADING,
    requestType
})

export const finishLoading = (requestType) => ({
    type: FINISH_LOADING,
    requestType
})

const initialState = {};

const loading = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                [action.payload]: true
            }
        case FINISH_LOADING:
            return {
                ...state,
                [action.payload]: false
            }
        default:
            return state;
    }
}
export default loading;