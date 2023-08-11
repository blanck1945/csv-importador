import React from "react";

const QueryContainer = ({ children, isLoading = false, error = null }) => {
  console.warn(isLoading);
  if (isLoading) return <p>REFERENCEIA</p>;

  if (error) return <p>Error</p>;

  return <>{children}</>;
};

export default QueryContainer;
