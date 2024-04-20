import { redirect } from "react-router-dom";

export { createRedirectTo };

function createRedirectTo(path) {
  return () => {
    return redirect(path);
  };
}
