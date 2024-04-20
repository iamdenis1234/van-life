import { getUserInfo } from "../../../api/getUserInfo.js";

export { loader, userInfoQuery };

function loader(queryClient) {
  return () => {
    console.log("start Profile loader");
    queryClient.ensureQueryData(userInfoQuery());
    console.log("end Profile loader");
    return null;
  };
}

function userInfoQuery() {
  return { queryKey: ["userInfo"], queryFn: getUserInfo };
}
