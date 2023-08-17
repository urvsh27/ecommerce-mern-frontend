import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Dashboard from './pages/user/Dashboard';
import PrivateRoutes from './components/Routes/PrivateRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* Private routes */}
        <Route path="/dashboard" element={<PrivateRoutes/>}>
        <Route path="" element={<Dashboard/>}/> 
        </Route> 
        {/* Private routes */}
      </Routes>
    </> 
  );
}

export default App;
