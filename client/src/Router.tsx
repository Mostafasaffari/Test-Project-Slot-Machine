import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { cookieStore } from "./helpers/localStorage";

import { history, store } from "./redux/store";

const App = lazy(() => import("./pages/app/layout"));
const Login = lazy(() => import("./pages/login/SignIn"));

const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div />}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Login} />
              <RestrictedRoute path="/app" component={App} />
              <Route component={() => <h1>404</h1>} />
            </Switch>
          </ConnectedRouter>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
};

interface IPropsRestrictRoute {
  component: React.FC<any>;
  [rest: string]: any;
}

const RestrictedRoute: React.FC<IPropsRestrictRoute> = ({
  component: Component,
  ...rest
}) => {
  const isLoggedIn = !!cookieStore.get("token");

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Router;
