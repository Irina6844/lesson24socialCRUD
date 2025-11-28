import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/usersReducer";
import { thunk } from "redux-thunk";
import authReducer from "./reducers/authReducer";

const rootReducer = combineReducers({
  usersData: usersReducer,
  authData:authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
