import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function RouteBuilder({ children }) {
  const [loaded, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
  }, []);

  return <>{loaded && children}</>;
}

RouteBuilder.propTypes = {
  children: PropTypes.node,
};


export default RouteBuilder;