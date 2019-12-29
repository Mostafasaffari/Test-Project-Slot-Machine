import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import AllCountries from "./allCountries";
import InfoCountry from "./infoCountry";
import SlotMachine from "./slotMachine";
import SearchCountries from "./searchCountries";

interface IProps {
  url: string;
}

const AppRouter: React.FC<IProps> = ({ url }) => {
  return (
    <Switch>
      <Route component={Home} path={`${url}/`} exact />
      <Route component={AllCountries} path={`${url}/all-countries`} exact />
      <Route component={InfoCountry} path={`${url}/get-info-country`} exact />
      <Route component={SearchCountries} path={`${url}/search-countries`} exact />
      <Route component={SlotMachine} path={`${url}/slot-machine`} exact />
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
