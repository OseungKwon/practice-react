import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./commnets/reducer";

const rootReducer = combineReducers({
    views: viewsReducer,
    subscribers: subscribersReducer,
    comments: commentsReducer
})

export default rootReducer;