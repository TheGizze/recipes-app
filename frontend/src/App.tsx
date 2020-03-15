import React from 'react';
import { Router } from './Router';
import './styles/global.scss';
import { BackendProvider } from './contexts/RecepiesContext';

const App: React.FunctionComponent = () => {
  return (
    <BackendProvider>
      <Router />
    </BackendProvider>
  );
};

export default App;
