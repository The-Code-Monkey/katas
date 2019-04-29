import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'

import 'sanitize.css'

const target = document.querySelector('#root');

render(
      <App />,
  target
);
