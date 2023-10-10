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
  const isPending = state !== "idle";

  return (
    <div className="login-container">
      <h1>Log in to your account</h1>
      {message && !isPending && <h3 className="red">{message}</h3>}
      {error && !isPending && <h3 className="red">{error.message}</h3>}
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
        <button disabled={isPending}>
          {isPending ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}
