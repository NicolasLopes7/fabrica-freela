module.exports = (error) => ({
  error: {
    name: error.name,
    message: error.message,
    stack: error.stack,
  },
});
