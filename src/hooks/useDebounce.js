import { useState } from "react";

export { useDebounce };

function useDebounce(func, waitInMs) {
  function getDebounced() {
    let timeoutId;

    return function debouncedFunc(...args) {
      const later = () => {
        func.apply(this, args);
      };
      clearTimeout(timeoutId);
      timeoutId = setTimeout(later, waitInMs);
    };
  }

  const [debounced] = useState(getDebounced);

  return debounced;
}
