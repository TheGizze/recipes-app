import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

const CreateRoutes: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} exact={route.exact || false} />
      ))}
    </React.Fragment>
  );
};

const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <CreateRoutes />
      </Switch>
    </BrowserRouter>
  );
};

export { Router };
