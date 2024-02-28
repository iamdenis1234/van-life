import { Alert, Divider, styled, SvgIcon, Typography } from "@mui/material";
import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";
import { CustomButton } from "../../components/CustomButton.jsx";
import { CustomContainer } from "../../components/CustomContainer.jsx";
import { CustomTextField } from "../../components/CustomTextField.jsx";
import { section } from "../../mixins.js";
import GoogleIcon from "./google.svg?react";
import { PasswordTextField } from "./PasswordTextField.jsx";

export { Login };

function Login() {
  console.log("Render Login");

  const error = useActionData();
  const { formMethod } = useNavigation();
  const { hash } = useLocation();
  const isLoginFirst = hash === "#loginfirst";
  // check formMethod so that the state is true only when the form
  // is being submitted, and not when simply navigating from this page to another
  const isPending = formMethod === "post";

  return (
    <Container>
      <Title variant="h1">Log in to your account</Title>
      {/*TODO: fix logic, so only one Alert is used*/}
      {isLoginFirst && !isPending && (
        <Alert severity="error">You must login first</Alert>
      )}
      {error && !isPending && <Alert severity="error">{error.message}</Alert>}
      <EmailPasswordForm method="post" replace>
        <CustomTextField
          fullWidth
          margin="dense"
          id="email"
          label="Email"
          name="email"
          type="email"
          autoComplete="username"
          required
        />
        <PasswordTextField
          fullWidth
          margin="dense"
          id="password"
          label="Password"
          name="password"
          autoComplete="current-password"
          required
        />
        <LoginButton
          disabled={isPending}
          fullWidth
          size="large"
          name="provider"
          value="emailAndPassword"
        >
          {isPending ? "Logging in..." : "Log in"}
        </LoginButton>
      </EmailPasswordForm>
      <LoginDivider>or</LoginDivider>
      <GoogleForm method="post" replace>
        <WithGoogleButton
          size="large"
          startIcon={
            <StyledSvgIcon
              component={GoogleIcon}
              inheritViewBox
              disabled={isPending}
            />
          }
          disabled={isPending}
          variant="outlined"
          name="provider"
          value="google"
        >
          Continue with Google
        </WithGoogleButton>
      </GoogleForm>
    </Container>
  );
}

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  textAlign: "center",
}));

const Container = styled(CustomContainer)(section, {});

const LoginButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const LoginDivider = styled(Divider)(({ theme }) => ({
  marginBlock: theme.spacing(3),
}));

const WithGoogleButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const GoogleForm = styled(Form)({
  display: "flex",
  justifyContent: "center",
});

const EmailPasswordForm = styled(Form)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const StyledSvgIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== "disabled",
})(({ disabled }) => ({
  filter: disabled && "grayscale(100%)",
}));
