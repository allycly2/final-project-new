import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../NavBar/Sidebar";
import "./UserProfile.css";
import Icon from "../Image/icon.png";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        if (!accessToken) {
          setError("Access token not found");
          redirectToLogin();
          return;
        }

        const response = await axios.get("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Unauthorized, access token expired
          setError("Access token expired. Please login again.");
          localStorage.removeItem("access_token");
          redirectToLogin();
        } else {
          setError("Failed to fetch user profile");
        }
      }
    };

    fetchUserProfile();
  }, []);

  const redirectToLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  const handleEdit = () => {
    setEditing(true);
    setName(user.name);
    setEmail(user.email);
  };

  const handleSave = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        setError("Access token not found");
        redirectToLogin();
        return;
      }

      const updatedUser = { ...user, name, email };

      await axios.post(
        "http://localhost:3000/api/update-profile",
        updatedUser,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setUser(updatedUser);
      setEditing(false);
    } catch (error) {
      setError("Failed to update profile");
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="profile-container">
      <div className="navigation">
        <Sidebar />
      </div>
      <div className="profile-content">
        <h2>Profile</h2>
        <div className="image">
          {" "}
          <img src={Icon} />
        </div>
        {editing ? (
          <>
            <p>
              Name:{" "}
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              Email:{" "}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
            <button onClick={handleSave}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <button onClick={handleEdit}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
