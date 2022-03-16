import * as React from 'react';
import { render } from 'react-dom';

import App from 'src/components/App';

const rootElement = document.getElementById('root');
const rootReactElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

render(rootReactElement, rootElement);
