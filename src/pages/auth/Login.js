import React, { useState } from 'react';
import Layout from '../../components/Layout';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import BarLoader  from "react-spinners/BarLoader";
import { NavLink } from 'react-router-dom';

const Login = () => {
  const reactAppApi = process.env.REACT_APP_API;
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [loader,setLoader] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post(`${reactAppApi}login`, {
        email,
        password,
      });
      if (loginResponse && loginResponse.data.status === '1') {
        toast.success(loginResponse.data.message);
        setTimeout(() => {
          setLoader(true);
          setAuth({
            ...auth,
            userDetails: loginResponse.data.data.userDetails,
            token: loginResponse.data.data.accessToken,
          })
          localStorage.setItem('auth', JSON.stringify(loginResponse.data.data, null ,4));
        }, 2000);
        setTimeout(() => {
          navigate(location.state || '/');
        }, 4000);
      }
    } catch (error) {
      if (error.response && error.response.data.status === '0') {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <Layout title={'Login'}>
      <div className="auth-display">
        <div>
          <Toaster />
          {loader &&  
          <>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
          <center  className="mb-3">
          <BarLoader height={4} width={200}/>
          <p className="page-text">Redirecting...</p>
          </center>
          </div>
          </>}
        </div>
        {!loader && <><form className="auth-form" onSubmit={handleLogin}>
          <div className="mb-3">
            <h1>Login</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control input-field"
              id="email"
              style={{ width: '300px' }}
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                className="form-control input-field password-input"
                id="password"
                style={{ width: '300px' }}
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <span
                className="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-dark button-submit"
            style={{ width: '300px' }}
          >
            Login
          </button>
          <NavLink to="/register" className="nav-link mt-3 text-center">
                Don't have an account? <span className="text-primary">Register</span> 
              </NavLink>
        </form>
        </>}
      </div>
    </Layout>
  );
};

export default Login;
