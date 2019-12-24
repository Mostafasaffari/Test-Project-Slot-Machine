import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";

interface IProps {
  url: string;
}

const AppRouter: React.FC<IProps> = ({ url }) => {
  return (
    <Switch>
      <Route component={Home} path={`${url}/`} exact />
      <Route
        component={() => <h1>this is test page Setting of test</h1>}
        path={`${url}/setting`}
        exact
      />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default AppRouter;
