import { Suspense, useState, useEffect } from "react";
import PropTypes from 'prop-types';

const LazyLayout = ({ component: Component, timeout, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <Suspense fallback="Loading...">
      {isLoading ? (
        "Loading..."
      ) : (
        <Component {...rest} />
      )}
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
  timeout: PropTypes.number.isRequired, // Timeout value in milliseconds
};

LazyLayout.defaultProps = {
  timeout: 3000, // Default timeout of 3 seconds
};

export default LazyLayout;
