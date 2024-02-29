import { Alert, Divider, styled, SvgIcon, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton.jsx";
import { CustomContainer } from "../../components/CustomContainer.jsx";
import { CustomTextField } from "../../components/CustomTextField.jsx";
import { section } from "../../mixins.js";
import GoogleIcon from "./google.svg?react";
import { PasswordTextField } from "./PasswordTextField.jsx";
import { useErrorMsg } from "./useErrorMsg.js";
import { useIsPending } from "./useIsPending.js";

export { Login };

function Login() {
  console.log("Render Login");

  const isPending = useIsPending();
  const errorMsg = useErrorMsg();

  return (
    <Container>
      <Title variant="h1">Log in to your account</Title>
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
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
          startIcon={
            <StyledSvgIcon
              component={GoogleIcon}
              inheritViewBox
              disabled={isPending}
            />
          }
          size="large"
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

const LoginDivider = styled(Divider)(({ theme }) => ({
  marginBlock: theme.spacing(3),
}));

const EmailPasswordForm = styled(Form)(({ theme }) => ({
  marginTop: theme.spacing(1),
}));

const LoginButton = styled(CustomButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const WithGoogleButton = styled(CustomButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const GoogleForm = styled(Form)({
  display: "flex",
  justifyContent: "center",
});

const StyledSvgIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== "disabled",
})(({ disabled }) => ({
  filter: disabled && "grayscale(100%)",
}));
