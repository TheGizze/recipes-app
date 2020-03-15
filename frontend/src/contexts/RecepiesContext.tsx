import React from 'react';
import { Recipies, RecipiesAPI } from './recepiesAPI';
import { APP_CONFIG } from '../utils/config';

const initialState = {
  Recipies: new Recipies(APP_CONFIG.backendURL, new RecipiesAPI()),
};

const RecipiesContext = React.createContext(initialState);

const BackendProvider: React.FunctionComponent = props => {
  return <RecipiesContext.Provider value={initialState}>{props.children}</RecipiesContext.Provider>;
};

export { RecipiesContext, BackendProvider };
