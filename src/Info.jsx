import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Info.css';

const Info = () => {
  const [userInfo, setUserInfo] = useState({});
  
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = (e) => {
    e.preventDefault();
    toggleEdit();
  };

  return (
    <div className="info-container">
      <h2 className="info-header">Account Information</h2>
      <form className="info-form" onSubmit={handleSave}>
        <div className="info-field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="info-input"
              required
            />
          ) : (
            <span>{userInfo.name}</span>
          )}
        </div>
        <div className="info-field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="info-input"
              required
            />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div className="info-field">
          <label>Password:</label>
          {isEditing ? (
            <input
              type="password"
              name="password"
              value={userInfo.password}
              onChange={handleChange}
              className="info-input"
              required
            />
          ) : (
            <span>********</span>
          )}
        </div>
        <button type="button" className="info-button" onClick={toggleEdit}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        {isEditing && <button type="submit" className="info-button">Save</button>}
      </form>
      <p>
        <Link to="/login" className="info-link">Return to Login</Link>
      </p>
    </div>
  );
};

export default Info;
