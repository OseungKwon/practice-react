import { FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_SUCCESS } from "./types";

const initialState = {
    items: [],
    loading: false,
    err: null
}
const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case FETCH_COMMENTS_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state;
    }
}
export default commentsReducer;