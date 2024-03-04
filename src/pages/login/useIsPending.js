import { useNavigation } from "react-router-dom";

export function useIsPending() {
  const { state, formMethod } = useNavigation();
  return state === "submitting" || (formMethod && state === "loading");
}
