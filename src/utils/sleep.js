// Do not delete this function, despite it could be unused, because it's
// a helpful utility to test/debug some code
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
