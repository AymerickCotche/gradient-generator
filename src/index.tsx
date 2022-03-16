import * as React from 'react';
import { render } from 'react-dom';

import App from 'src/components/App';

const rootElement = document.getElementById('root');
const rootReactElement = <App />;

render(rootReactElement, rootElement);
