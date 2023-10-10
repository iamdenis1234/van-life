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
  const { formMethod } = useNavigation();
  const { hash } = useLocation();
  const isLoginFirst = hash === "#loginfirst";
  // check formMethod so that the state is true only when the form
  // is being submitted, and not when simply navigating from this page to another
  const isPending = formMethod === "post";

  return (
    <div className="login-container">
      <h1>Log in to your account</h1>
      {isLoginFirst && !isPending && (
        <h3 className="red">You must login first</h3>
      )}
      {error && !isPending && <h3 className="red">{error.message}</h3>}
      <Form method="post" className="login-form" replace>
        <input
          name="email"
          type="email"
          placeholder="Email address"
          autoComplete="username"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          required
        />
        <button disabled={isPending} name="provider" value="emailAndPassword">
          {isPending ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <Form method="post" className="login-with-google-form" replace>
        <button
          disabled={isPending}
          name="provider"
          value="google"
          className="login-with-google-btn"
        >
          Continue with Google
        </button>
      </Form>
    </div>
  );
}
