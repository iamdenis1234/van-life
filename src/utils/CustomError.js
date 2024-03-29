export { CustomError, isCustomError };

class CustomError extends Error {
  constructor(message, data = {}) {
    super(message);

    this.data = data;
  }
}

function isCustomError(error) {
  return error instanceof CustomError;
}
