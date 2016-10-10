import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

/**
 * Routes are used to declare your view hierarchy
 * See: https://github.com/rackt/react-router/blob/master/docs/API.md
 */
import Master from './src/components/Master';
import App from './src/components/App';

export default (
  <Route component={Master}>
    <Route path="/" component={App} />
  </Route>
);
