import { Global } from '@emotion/react';
import normalize from 'emotion-normalize';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { GlobalStyles } from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Global styles={[normalize, GlobalStyles]} />
  </React.StrictMode>,
  document.getElementById('root'),
);
