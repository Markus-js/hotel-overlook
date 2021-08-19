import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function DashBoard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLoguout() {
    setError("");

    try {
      await logout();
      history.push("/forside");
    } catch {
      setError("Failed to log out");
    }
  }
  
  return (
    <>
      <section>
        <div>
          <h2>Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" >
            Update Profile
          </Link>
        </div>
      </section>
      <div>
        <button variant="link" onClick={handleLoguout}>
          Log Out
        </button>
      </div>
    </>
  );
}