import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from 'src/store';
import App from 'src/components/App';

const rootElement = document.getElementById('root');
const rootReactElement = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

render(rootReactElement, rootElement);
