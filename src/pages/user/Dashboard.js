import React from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../context/Auth';
import BarLoader from 'react-spinners/BarLoader';

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  setAuth(auth);
  return (
    <Layout title={'Dashboard '}>
      {!auth?.userDetails ? (
        <>
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
      ) : (
        <>
          <h1>Dashboard</h1>
        </>
      )}
    </Layout>
  );
};

export default Dashboard;
