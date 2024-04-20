import { getUserInfo } from "../../../api/getUserInfo.js";

export { loader, userInfoQuery };

function loader(queryClient) {
  return () => {
    queryClient.ensureQueryData(userInfoQuery());
    return null;
  };
}

function userInfoQuery() {
  return { queryKey: ["userInfo"], queryFn: getUserInfo };
}
