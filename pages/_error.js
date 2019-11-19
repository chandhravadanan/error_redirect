import React from 'react';
import Router from 'next/router';

function ErrorHandler(props) {
  return <div>my custom error page</div>;
}

ErrorHandler.getInitialProps = ({ req, res, err }) => {
  if (res && res.statusCode === 404) {
    res.writeHead(302, {
      Location: '/about'
    });
    res.end();
  } else if (err && err.statusCode === 404) {
    Router.push('/about');
  }
  return {};
};

export default ErrorHandler;