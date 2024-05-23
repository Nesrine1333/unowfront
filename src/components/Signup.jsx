import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Homepage } from "./Homepage";
import axios from "axios";
import "./Signup.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const url='http://localhost:8080/api/candidat/Signup';
export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    userName: "",
    email: "",
    userType: "",
    password: "",
    checked: false,
  });

  const [errors, setErrors] = useState({
    password: '',
    checked: '',
  });

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      userType: "client",
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log(formData);

    // Validate password immediately
    if (name === 'password') {
      const passwordError = validatePassword(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: passwordError,
      }));
    }

    // Clear checkbox error when user checks/unchecks
    if (name === 'checked') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        checked: '',
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    // Password validation
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      isValid = false;
      errors.password = passwordError;
    }

    // Checkbox validation
    if (!formData.checked) {
      isValid = false;
      errors.checked = 'You must agree to the terms and conditions';
    }

    setErrors(errors);
    return isValid;
  };

  async function handleSubmit (e) {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Proceed with form submission logic
     
     
      

     
     
      await axios.post(url,{
    
        name:formData.name,
        phone:formData.phone,
        userName:formData.userName,
        email:formData.email,
        userType: formData.userType,
        password:formData.password,
        checked:formData.checked,

      }
   
    )  .then(function (response) {
      console.log(response);
  })
  .catch(errors => console.log(errors));
    }
  };

  return (
    <div className="globalcontainer">
      <div className="background">
        <img src="./src/assets/img/backgroundsignup.png" alt="img" />
      </div>
      <Link to="/" className="home">Homepage </Link>
      <div className="containerform">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">userName</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <small className="error">{errors.password}</small>}
            </div>
            <div className="mb-3">
              <input
                type="checkbox"
                id="checked"
                name="checked"
                checked={formData.checked}
                onChange={handleChange}
              />
              <label htmlFor="checked" className="form-label"> I agree to the terms and conditions</label>
              {errors.checked && <small className="error">{errors.checked}</small>}
            </div>
            <div className="submitbutton">
              <button type="submit" className="btnsignup">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};