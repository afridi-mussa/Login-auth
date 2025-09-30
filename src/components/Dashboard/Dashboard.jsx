// src/components/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { removeToken, getToken } from "../../auth";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const token = getToken();
  const [user, setUser] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showLoginDetails, setShowLoginDetails] = useState(false);

  const handleLogout = () => {
    removeToken();
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/login");
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/2"); // mock user
        setUser(res.data.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  // get login details from localStorage
  const email = localStorage.getItem("userEmail");
  const password = localStorage.getItem("userPassword");

  return (
    <div className="dashboard">
      <div className="dashboard-glass">
        <h1>E-Commerce Dashboard 🛒</h1>
        <p className="subtitle">Welcome back! Here’s your store overview.</p>

        {/* Stats Section */}
        <div className="stats-grid">
          <div className="stat-card"><h2>$12,340</h2><p>Total Sales</p></div>
          <div className="stat-card"><h2>1,245</h2><p>Orders</p></div>
          <div className="stat-card"><h2>320</h2><p>Products</p></div>
          <div className="stat-card"><h2>540</h2><p>Customers</p></div>
        </div>

        {/* Token */}
        <div className="token-box">
          <strong>JWT Token:</strong>
          <p>{token}</p>
        </div>

        {/* Show/Hide ReqRes User */}
        <button className="details-btn" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? "Hide User Details" : "Show User Details"}
        </button>

        {showDetails && user && (
          <div className="user-card">
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.email}</p>
          </div>
        )}

        {/* Show/Hide Login Credentials */}
        <button className="details-btn" onClick={() => setShowLoginDetails(!showLoginDetails)}>
          {showLoginDetails ? "Hide Login Credentials" : "Show Login Credentials"}
        </button>

        {showLoginDetails && (
          <div className="login-card">
            <h2>🔑 Login Credentials</h2>
            <p><strong>Email:</strong> {email || "No email saved"}</p>
            <p><strong>Password:</strong> {password || "No password saved"}</p>
          </div>
        )}

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
