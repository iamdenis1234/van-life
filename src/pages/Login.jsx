import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api.js";

export { Login };

function Login() {
  console.log("Render Login");

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const { hash } = useLocation();
  const navigate = useNavigate();
  const message = hash === "#loginfirst" && "You must login first";
  const isSubmitting = status === "submitting";

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("login user");
    setStatus("submitting");
    setError(null);
    navigate(".", { replace: true });
    let user;
    try {
      user = await loginUser(loginFormData);
      console.log(user);
    } catch (e) {
      setError(e);
    } finally {
      setStatus("idle");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h3 className="red">{message}</h3>}
      {error && <h3 className="red">{error.response.data.message}</h3>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          autoComplete="username"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={loginFormData.password}
        />
        <button
          disabled={isSubmitting}
          style={
            isSubmitting ? { backgroundColor: "rgb(255 140 56 / 50%)" } : {}
          }
        >
          Log in
        </button>
      </form>
    </div>
  );
}
