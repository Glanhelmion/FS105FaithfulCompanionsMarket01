import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import Backgroundimage from "../components/Backgroundimage";
// import NavigationForHome from "../components/NavigationForHome";

const ProfilePage = () => {
    const [userData, setUserData] = useState({});
    const fileInputRef = useRef(null); // Reference to the file input
    const [newPassword, setNewPassword] = useState(""); // For users to edit and set new password
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  
    useEffect(() => {
      const fetchProfile = async () => {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get("http://localhost:5000/ProfilePage", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching profile", error);
          // Handle error (e.g., redirect to login if unauthorized)
        }
      };
  
      fetchProfile();
    }, []);
  
    const handleImageUpload = async (e) => {
      const formData = new FormData();
      formData.append("profileImage", e.target.files[0]);
  
      try {
        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ); // Update the user's profile state
        if (response.data) {
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error uploading image", error);
      }
    };
  
    const triggerFileInput = () => {
      // Trigger the hidden file input
      fileInputRef.current.click();
    };
  
    const handlePasswordChange = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "http://localhost:5000/change-password",
          { newPassword },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert("Password changed successfully");
        setNewPassword("");
      } catch (error) {
        console.error("Error changing password", error);
        alert("Failed to change password");
      }
    };
  
    const handleDeleteAccount = async () => {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      );
      if (confirmDelete) {
        try {
          const token = localStorage.getItem("token");
          await axios.delete("http://localhost:5000/delete-account", {
            headers: { Authorization: `Bearer ${token}` },
          });
          alert("Account deleted successfully");
          localStorage.removeItem("token"); // Remove token from storage
          window.location.href = "/"; // Redirect to home or login page
        } catch (error) {
          console.error("Error deleting account", error);
          alert("Failed to delete account");
        }
      }
    };
  
    return (
      <div className="bg-light">
        {/* <NavigationForHome /> */}
        <h1 className="text-center fw-bold mt-5 p-5">Hello {userData.name}</h1>
        <div className="text-center">
          {userData.profileImagePath && (
            <img
              src={`http://localhost:5000/${userData.profileImagePath}`}
              alt="Profile"
              className="rounded-circle"
              style={{ width: "500px", height: "500px" }}
            />
          )}
        </div>
  
        {/* Hidden file input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <div className="text-center">
          <button
            className="btn btn-dark m-3 custom-login-button"
            onClick={triggerFileInput}
          >
            Upload Image
          </button>
        </div>
  
        {/* Edit And Set Password Form */}
        <div className="text-center">
          <form onSubmit={handlePasswordChange}>
            <input
              type={showPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
            />
            <button type="submit">Change Password</button>
            <button
              onClick={togglePasswordVisibility}
              type="button"
              className="bg-dark text-white"
            >
              {showPassword ? "Hide" : "Show"} Password 👀
            </button>
          </form>
        </div>
  
        {/* Add Delete Account Button */}
        <div className="text-center mt-4">
          <button className="btn btn-danger" onClick={handleDeleteAccount}>
            Delete Account
          </button>
        </div>
      </div>
    );
  };
  
  export default ProfilePage;