import { useActionData, useLocation } from "react-router-dom";
import { useIsPending } from "./useIsPending.js";

export function useErrorMsg() {
  const isPending = useIsPending();
  const error = useActionData();
  const { hash } = useLocation();
  const isLoginFirst = hash === "#loginfirst";

  let errorMsg = "";
  if (isLoginFirst && !isPending) {
    errorMsg = "You must login first";
  } else if (error && !isPending) {
    errorMsg = error.message;
  }

  return errorMsg;
}
