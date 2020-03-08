import React from 'react';
import { Header } from '../components/Header';
import * as styles from './styles/defaultLayout.module.scss';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = props => {
  return (
    <div>
      <Header />
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export { DefaultLayout };
