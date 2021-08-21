module.exports = (queryParams) => {
  let queryParameters = [];

  Object.entries(queryParams).forEach(([name, value]) => {
    queryParameters.push(`${name}=${value}`);
  });
  
  return (queryParameters.length > 0 ? '?' : '') + queryParameters.join("&");
};
