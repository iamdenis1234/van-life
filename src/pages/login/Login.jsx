import { Alert, Divider, styled, SvgIcon, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import { CustomButton } from "../../components/CustomButton.jsx";
import { CustomContainer } from "../../components/CustomContainer.jsx";
import { CustomTextField } from "../../components/CustomTextField.jsx";
import GoogleIcon from "./google.svg?react";
import { PasswordTextField } from "./PasswordTextField.jsx";
import { useErrorMsg } from "./useErrorMsg.js";
import { useIsPending } from "./useIsPending.js";

export { Login };

function Login() {
  const isPending = useIsPending();
  const errorMsg = useErrorMsg();

  return (
    <CustomContainer>
      <Section>
        <Title variant="h1">Log in to your account</Title>
        {errorMsg && <ErrorMsg severity="error">{errorMsg}</ErrorMsg>}
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
            type="submit"
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
        <Form method="post" replace>
          <WithGoogleButton
            type="submit"
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
        </Form>
      </Section>
    </CustomContainer>
  );
}

const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 480,
  marginInline: "auto",
});

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(5),
  textAlign: "center",
}));

const ErrorMsg = styled(Alert)({
  width: "100%",
});

const LoginDivider = styled(Divider)(({ theme }) => ({
  marginBlock: theme.spacing(3),
  width: "100%",
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

const StyledSvgIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== "disabled",
})(({ disabled }) => ({
  filter: disabled && "grayscale(100%)",
}));
