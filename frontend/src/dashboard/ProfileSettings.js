import React, { useEffect, useState } from "react";
import "../styles/ProfileSettings.css";

const ProfileSettings = () => {
  const [user, setUser] = useState({
    name: "",
    bio: "",
    dob: "",
    address: "",
    school: "",
    profileImage: "",
  });

  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.id) {
      fetch(`http://localhost:8080/api/auth/users/${storedUser.id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setPreviewImage(data.profileImage);
        })
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPreviewImage(imageUrl);
    setUser((prev) => ({ ...prev, profileImage: imageUrl }));
  };

  const handleSave = () => {
    fetch(`http://localhost:8080/api/auth/users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated successfully!");
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => console.error("Error updating profile:", err));
  };

  return (
    <div className="profile-settings-container">
      <div className="profile-settings-header">
        <h2>🛠️ Profile Settings</h2>
        <button className="back-btn" onClick={() => window.history.back()}>
          🔙 Back to Dashboard
        </button>
      </div>

      <div className="profile-form">
        <div className="image-section">
          <img src={previewImage || "/default-avatar.png"} alt="Profile" />
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="fields">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
          />
          <textarea
            name="bio"
            placeholder="Your Bio"
            rows={4}
            value={user.bio}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dob"
            value={user.dob?.substring(0, 10)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={user.address}
            onChange={handleChange}
          />
          <input
            type="text"
            name="school"
            placeholder="School"
            value={user.school}
            onChange={handleChange}
          />

          <button className="save-btn" onClick={handleSave}>
            💾 Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
