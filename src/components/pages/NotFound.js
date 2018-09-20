import React from 'react';

export default () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <h1 className="display-4">
        {' '}
        <span className="text-danger">404</span> Page Not Found
      </h1>
      <p className="lead">Sory, the page does not exist</p>
    </div>
  );
};
