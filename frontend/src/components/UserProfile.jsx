import React, { useState } from 'react';
import './UserProfile.css';

const Form = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({
    username: '',
    name: '',
    lastName: '',
    password: '',
    password2: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInputs();
  };

  const checkInputs = () => {
    let newErrors = {};
    if (username.trim() === '') {
      newErrors.username = 'Username cannot be blank';
    }
    if (name.trim() === '') {
      newErrors.name = 'Name cannot be blank';
    }
    if (lastName.trim() === '') {
      newErrors.lastName = 'Last Name cannot be blank';
    }
    if (password.trim() === '') {
      newErrors.password = 'Password cannot be blank';
    }
    if (password2.trim() === '') {
      newErrors.password2 = 'Repeat Password cannot be blank';
    } else if (password.trim() !== password2.trim()) {
      newErrors.password2 = 'Passwords do not match';
    }
    setErrors(newErrors);
  };

  return (
    <div className="container">
      <form id="form" className="form" onSubmit={handleSubmit}>
        <div className={`form-control ${errors.username && 'error'}`}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small>{errors.username}</small>
        </div>

        <div className={`form-control ${errors.name && 'error'}`}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <small>{errors.name}</small>
        </div>

        <div className={`form-control ${errors.lastName && 'error'}`}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <small>{errors.lastName}</small>
        </div>

        <div className={`form-control ${errors.password && 'error'}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="******"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>{errors.password}</small>
        </div>

        <div className={`form-control ${errors.password2 && 'error'}`}>
          <label htmlFor="password2">Repeat Password</label>
          <input
            type="password"
            placeholder="******"
            id="password2"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <small>{errors.password2}</small>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Form;
