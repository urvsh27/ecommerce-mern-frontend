import React from 'react';
import Layout from '../components/Layout';
import { useAuth } from '../context/Auth';

const Home = () => {
const [auth, setAuth] = useAuth();
setAuth(auth)  ;
  return (
    <Layout  title = {'Welcome to TrendCart'}>
        <h1>Home</h1>
        <pre>
          {JSON.stringify(auth, null, 4)}
        </pre>
    </Layout>
  )
}

export default Home;