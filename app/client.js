/* eslint-env browser */
/* global process */

import 'babel/polyfill';
import React from 'react';
import { BrowserHistory, HashHistory } from 'react-router';
import Root from './Root';

const history = (process.env.NODE_ENV === 'production')
  ? new BrowserHistory()
  : new HashHistory();

React.render(
  <Root {...{ history }} />,
  document.geElementById('app')
);
