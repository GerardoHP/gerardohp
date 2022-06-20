const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../components/App');

const serverRender = () => {
  const markup = renderToString(<App />);
  return {
    initialMarkup: markup
  };
};

export default serverRender;
