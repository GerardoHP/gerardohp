import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../components/App';

const serverRender = () => {
  const markup = renderToString(<App />);
  return {
    initialMarkup: markup
  };
};

export default serverRender;
