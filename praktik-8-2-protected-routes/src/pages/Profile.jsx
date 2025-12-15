import React from "react";

const Profile = () => {
    const username = localStorage.getItem("username");

    return (
        <div className="card">
            <div className="profile-header">
                <h1>Profile Page</h1>
            </div>
            <div className="profile-info">
                <p>Welcome, <strong>{username}</strong>!</p>
            </div>
        </div>
    );
}

export default Profile;