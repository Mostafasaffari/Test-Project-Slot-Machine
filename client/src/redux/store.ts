import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import reducers from "./reducers";

const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const rootReducers = combineReducers({
  router: connectRouter(history),
  ...reducers
});
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export { store, history };
export type AppState = ReturnType<typeof rootReducers>;
