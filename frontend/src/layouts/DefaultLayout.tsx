import React from 'react';

const DefaultLayout: React.FunctionComponent = props => {
  return <div className="default-layout">{props.children}</div>;
};

export { DefaultLayout };
