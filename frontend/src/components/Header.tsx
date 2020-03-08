import React, { useState, useEffect } from 'react';
import * as styles from './styles/header.module.scss';
import { routes } from '../routes';
import { Link } from 'react-router-dom';

const NavigationLinks = () => {
  const [usedRoutes, setUsedRoutes] = useState<RouteType[]>([]);

  useEffect(() => {
    setUsedRoutes(
      routes
        .filter(route => route.linkLocation === 'Header')
        .sort((linkA, linkB) => {
          if (linkA.order > linkB.order) return 1;
          if (linkB.order > linkA.order) return -1;
          return 0;
        })
    );
  }, [routes]);

  if (usedRoutes.length > 0) {
    return (
      <>
        {usedRoutes.map(route => {
          return (
            <span className={styles.linkWrapper}>
              <Link key={route.path} to={route.path}>
                {route.linkText}
              </Link>
            </span>
          );
        })}
      </>
    );
  }
  return <span />;
};

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoWrapper}>
        <Link className={styles.logo} to={'/'}>
          <h1>Our logo</h1>
        </Link>
      </div>
      <div className={styles.navigationLinks}>
        <NavigationLinks />
      </div>
    </div>
  );
};

export { Header };
