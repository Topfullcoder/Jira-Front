import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import userReducer from "./reducers/userReducers";
import { authReducer } from "./reducers/authReducers";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
