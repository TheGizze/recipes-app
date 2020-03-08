import React from 'react';
import { Header } from '../components/Header';
import * as styles from './styles/defaultLayout.module.scss';

const DefaultLayout: React.FunctionComponent = props => {
  return (
    <div>
      <Header />
      <div className={styles.body}>{props.children}</div>
    </div>
  );
};

export { DefaultLayout };
