import { useState, useEffect } from 'react';
import { useAuth } from '../../context/Auth';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import BarLoader from 'react-spinners/BarLoader';
import toast, { Toaster } from 'react-hot-toast';

export default function PrivateRoutes() {
  const reactAppApi = process.env.REACT_APP_API;
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const authCheckResponse = await axios.get(`${reactAppApi}user-auth`);
        if (authCheckResponse.data && authCheckResponse.data.status === '1') {
          setOk(true);
          setLoader(false);
        } else {
          setOk(false);
        }
      } catch (error) {
        setTimeout(() => {
          setAuth({
            ...auth,
            userDetails: null,
            token: '',
          });
          localStorage.removeItem('auth');
          navigate('/login', {
            state: location.pathname,
          });
        }, 2000);
        if (error.response && error.response.data.status === '0') {
          toast.error(error.response.data.message);
        } else if (error.response && error.response.data.status === '5') {
          toast.error(error.response.data.message);
        } else {
          toast.error(error.message);
        }
      }
    };

    if (auth?.token) {
      authCheck();
    } else {
      setTimeout(() => {
        navigate('/login', {
          state: location.pathname,
        });
      }, 2000);
    }
  }, [auth, location.pathname, navigate, reactAppApi, setAuth]);

  return ok ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      {loader && (
        <>
          <Toaster />
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            <center className="mb-3">
              <BarLoader height={4} width={200} />
              <p className="page-text">Redirecting...</p>
            </center>
          </div>
        </>
      )}
    </>
  );
}
