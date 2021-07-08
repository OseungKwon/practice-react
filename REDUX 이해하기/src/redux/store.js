import { createStore } from "redux";
import pointReducer from "./reducer";

const store = createStore(pointReducer);

export default store;