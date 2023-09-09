import { useState } from "react";
import { Form, useActionData, useLocation } from "react-router-dom";

export { Login };

function Login() {
  console.log("Render Login");

  const [status, setStatus] = useState("idle");

  const { hash } = useLocation();
  const message = hash === "#loginfirst" && "You must login first";
  const isSubmitting = status === "submitting";

  const error = useActionData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.message}</h3>}
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
        <button
          disabled={isSubmitting}
          style={
            isSubmitting ? { backgroundColor: "rgb(255 140 56 / 50%)" } : {}
          }
        >
          Log in
        </button>
      </Form>
    </div>
  );
}
