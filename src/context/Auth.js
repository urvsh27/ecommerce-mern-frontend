import { useState, useContext, createContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userDetails: null,
    token: '',
  });

  //default axios 
  axios.defaults.headers.common['Authorization'] = auth?.token;

  useEffect(() => {
  const localStorageData = localStorage.getItem('auth');
  if (localStorageData) {
    const { userDetails, accessToken} = JSON.parse(localStorageData);
    setAuth({ userDetails : userDetails, token : accessToken });
  }
  }, [] )
  /* [auth] => if you write auth in parenthesis array if will call useEffect again and again */

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
