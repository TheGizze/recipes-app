import { FrontPage } from './routes/FrontPage';
import { About } from './routes/About';

const routes: RouteType[] = [
  {
    path: '/',
    component: FrontPage,
    exact: true,
    linkLocation: 'None',
    linkText: '',
    order: -1,
  },
  {
    path: '/about',
    component: About,
    linkLocation: 'Header',
    linkText: 'About',
    order: 0,
  },
];

export { routes };
