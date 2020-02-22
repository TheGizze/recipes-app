import React from 'react';
import { Router } from './Router';
import { DefaultLayout } from './layouts/DefaultLayout';

const App: React.FunctionComponent = () => {
  return (
    <DefaultLayout>
      <Router />
    </DefaultLayout>
  );
};

export default App;
