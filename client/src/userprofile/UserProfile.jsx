import React from "react";
import { useSelector } from "react-redux";
import "./userprofile.css";

function UserProfile() {
  const user = useSelector((state) => state.user);
  console.log(user, "selector");
  return (
    <>
      <div className="user-profile-card">
        <h3>User Profile</h3>
        <div className="avatar-container">
          <img
            src={`/images/${user.profile_image}`}
            alt="Profile Avatar"
            className="avatar"
          />
        </div>
        <div className="user-info">
          <p>
            Name: <strong>{user.name}</strong>
          </p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
