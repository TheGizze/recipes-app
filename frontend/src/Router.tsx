import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import { DefaultLayout } from './layouts/DefaultLayout';

const CreateRoutes: React.FunctionComponent = () => {
  return (
    <>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} exact={route.exact || false} />
      ))}
    </>
  );
};

//TODO: Do we use HashRouter or BrowserRouter??
const Router: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <DefaultLayout>
          <CreateRoutes />
        </DefaultLayout>
      </Switch>
    </HashRouter>
  );
};

export { Router };
