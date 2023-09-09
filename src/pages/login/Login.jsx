import {
  Form,
  useActionData,
  useLocation,
  useNavigation,
} from "react-router-dom";

export { Login };

function Login() {
  console.log("Render Login");

  const error = useActionData();
  const { state } = useNavigation();
  const { hash } = useLocation();
  const message = hash === "#loginfirst" && "You must login first";
  const isSubmitting = state === "submitting";

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && !isSubmitting && <h3 className="red">{message}</h3>}
      {error && !isSubmitting && <h3 className="red">{error.message}</h3>}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="username"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
        />
        <button disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
