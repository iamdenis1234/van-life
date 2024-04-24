import { styled, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { CustomProgress } from "../../../components/CustomProgress/CustomProgress.jsx";
import { userInfoQuery } from "./loader.js";

export { Profile };

function Profile() {
  const { data, status, isPending } = useQuery(userInfoQuery());
  const isSuccess = status === "success";

  return (
    <>
      {isPending && <CustomProgress />}
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
