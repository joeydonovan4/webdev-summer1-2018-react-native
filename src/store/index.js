import { createStore } from "redux";
import { courseReducer } from "../reducers/courseReducer";

const store = createStore(courseReducer);
export default store;