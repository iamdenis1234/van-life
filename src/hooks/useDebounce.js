import { useRef } from "react";

export { useDebounce };

function useDebounce(func, waitInMs) {
  const ref = useRef(getDebounced(func, waitInMs));
  return ref.current;
}

function getDebounced(func, waitInMs) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func.bind(this, ...args), waitInMs);
  };
}
