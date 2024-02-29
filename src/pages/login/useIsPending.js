import { useNavigation } from "react-router-dom";

export function useIsPending() {
  const { formMethod } = useNavigation();
  // check formMethod so that the state is true only when the form
  // is being submitted, and not when simply navigating from current page to another
  return formMethod === "post";
}
