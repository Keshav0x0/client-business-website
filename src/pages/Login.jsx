import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      alert("Login Successful!");

      navigate("/admin", { replace: true });
    } catch (err) {
      alert(
        err.response?.data?.message || "Invalid Credentials"
      );
    }
  };

  return (
    <section className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-box">KV</div>

          <h2>KV Enterprises</h2>

          <p>Admin Portal</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <div className="password-container">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;