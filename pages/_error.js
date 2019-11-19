import React from 'react';
import Router from 'next/router';

function ErrorHandler(props) {
  return <div>my custom error page</div>;
}

ErrorHandler.getInitialProps = ({ req, res, err }) => {
  try{
      if (res && res.statusCode === 404) {
        res.writeHead(302, {Location: 'https://google.com'});
        res.end();
        } else if (err && err.statusCode === 404) {
            Router.push('https://google.com');
        }
    }catch(e){
        console.log('error occurred', res)
    }
  return {};
};

export default ErrorHandler;