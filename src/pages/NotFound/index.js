import React from 'react';
import EmptyLayout from '../../components/templates/EmptyLayout';

function NotFound() {
  return (
    <EmptyLayout>
      <p>
        404 page not found <a href="/">go home</a>
      </p>
    </EmptyLayout>
  );
}

export default NotFound;
