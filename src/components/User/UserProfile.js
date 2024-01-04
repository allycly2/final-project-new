import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        console.log("Access token:", accessToken);

        const response = await axios.get("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        console.log("Profile response:", response.data);
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        setError("Failed to fetch user profile");
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Render other user data */}
        </>
      )}
    </div>
  );
};

export default UserProfile;
