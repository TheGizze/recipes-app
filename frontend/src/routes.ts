import { FrontPage } from './routes/FrontPage';

const routes: RouteType[] = [
  {
    path: '/',
    component: FrontPage,
    exact: true,
  },
];

export { routes };
