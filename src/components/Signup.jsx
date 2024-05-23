import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import { Homepage } from "./Homepage";
import "./Signup.css";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    username: "",
    email: "",
    password: "",
    checked:false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };
  return (
  
   <div>
     <div className="background">
        <img src="./src/assets/img/sign 1.png" alt="img" />
     </div>
  <Link to="/" className="home">Homepage </Link>
  
    <div className="containerform">
   
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
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
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
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
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* <div className="checkbox">
  
  <input type="checkbox" 
          className="form-control"
          id="checked"
          name="checked"
          value={formData.checked}
          onChange={handleChange}
          required/>   
              <label htmlFor="checked"> By creating an account, I agree to our Terms of use 
and Privacy Policy </label>
  </div> */}

          <div className="submitbutton">
           
            <button type="submit" className="btnsignup">
              Sign Up
            </button>
          </div>
        </div>
       
      
      </form>
    </div>
    </div>
  );
};
