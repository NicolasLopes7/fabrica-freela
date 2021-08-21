module.exports = (body) => {
  if (body) {
    return " - " + JSON.stringify(body);
  }
};
