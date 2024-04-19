import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../../api/getUserInfo.js";

export { Profile };

function Profile() {
  console.log("Render Profile");
  const { data, status } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfo,
  });
  const isSuccess = status === "success";

  return (
    <>
      {isSuccess && (
        <>
          <Typography variant="h3" component="h1">
            Welcome, {data.name}!
          </Typography>
          <UserInfo>
            <Typography>
              <Highlight>Your email</Highlight>: {data.email}
            </Typography>
            <Typography>
              <Highlight>Your last login time</Highlight>: {data.lastLoginTime}
            </Typography>
          </UserInfo>
        </>
      )}
    </>
  );
}

const UserInfo = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(0.5),
}));

const Highlight = styled("span")(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
}));
