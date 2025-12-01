import { createStore, combineReducers, applyMiddleware } from "redux";
import usersReducer from "./reducers/usersReducer";
import authReducer from "./reducers/authReducer";
import profileReducer from "./reducers/profileReducer";

import { thunk } from "redux-thunk";


const rootReducer = combineReducers({
  usersData: usersReducer,
  authData:authReducer,
  profileData:profileReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
