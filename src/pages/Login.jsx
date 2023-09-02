import { useState } from "react";
import { useLocation } from "react-router-dom";

export { Login };

function Login() {
  console.log("Render Login");

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const { hash } = useLocation();
  const message = hash === "#loginfirst" && "You must login first";

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
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
        <button>Log in</button>
      </form>
    </div>
  );
}
