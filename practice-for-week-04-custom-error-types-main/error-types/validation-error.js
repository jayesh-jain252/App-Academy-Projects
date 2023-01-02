// Your code here

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/
class ValidationError extends Error {
  constructor(...params) {
    // Pass all arguments to parent constructor
    super(...params);

    // Maintains proper stack trace for where error was thrown (available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ValidationError);
    }

    this.name = "ValidationError";
    this.message = this.message || "Invalid input";
  }
}

try {
  module.exports = ValidationError;
} catch {
  module.exports = null;
}
