// src/components/LoginForm/LoginForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { setToken } from "../../auth";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await api.post("/login", { email, password });

      // Save token + login details
      setToken(res.data.token);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      // Navigate AFTER saving
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
      console.error(err.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>🔐 Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Credentials helper box */}
        <div className="credentials-box">
          <p><strong>Test Login Credentials</strong></p>
          <p>
            Email: <code>eve.holt@reqres.in</code><br />
            Password: <code>cityslicka</code>
          </p>
        </div>
      </div>
    </div>
  );
}
