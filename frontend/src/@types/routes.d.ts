type LinkLocation = 'None' | 'Header';
type RouteType = {
  path: string;
  component: React.ComponentType;
  linkText: string;
  linkLocation: LinkLocation;
  order: number;
  exact?: boolean;
};
