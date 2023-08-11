export const getPaginationData = (page?: number, limit?: number) => {
  return {
    page: page || 1,
    limit: limit || 100,
  };
};

export const addConditionalProps = (options) => {
  return {
    ...(options.filter && { filter: options.filter }),
    ...(options.sort && { sort: options.sort }),
    ...(options.expand && { expand: options.expand }),
    ...(options.fields && { fields: options.fields }),
  };
};
