import React, { useState } from 'react';
import './UserProfile.css';

const Form = () => {
  const username = 'maria_rossi';
  const name = 'Maria';
  const lastName = 'Rossi';

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPasswords();
  }

  const checkPasswords = () => {
    if (newPassword !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
      // Implement password change logic here
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <span id="username">{username}</span>
        </div>

        <div className="form-control">
          <span id="name">{name}</span>
        </div>

        <div className="form-control">
          <span id="lastName">{lastName}</span>
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="Password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="Confirm password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && <small>{passwordError}</small>}
        </div>

        <button type="submit">Save</button>
      </form>
    </div>

    </div>
    
  );
};

export default Form;
