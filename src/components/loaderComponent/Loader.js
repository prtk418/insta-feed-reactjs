import React from 'react';

function Loader() {
  return (
    <img alt="loader" src={process.env.PUBLIC_URL + 'loader.gif'} />
  );
}

export default Loader;
