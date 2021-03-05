// routers.js
import React from 'react';
import { Redirect } from 'react-router-dom';

export const redirectRoutes = [
  {
    path: '/',
    exact: true,
    // handle redirect case: / -> /myurl/
    // eslint-disable-next-line react/display-name
    render: () => <Redirect to={`/nvc-test`} />
  }
];
