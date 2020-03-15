import React, { useContext } from 'react';
import { RecipiesContext } from '../contexts/RecepiesContext';

const About = () => {
  const ctx = useContext(RecipiesContext);
  ctx.Recipies.getAllRecipies().then(console.log);

  return (
    <div>
      <h1>This is about page</h1>
      <p>We make good stuff here</p>
    </div>
  );
};

export { About };
