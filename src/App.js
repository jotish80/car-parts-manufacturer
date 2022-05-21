 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import Reviews from './Pages/Reviews/Reviews';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/purchase' element={<Purchase />} /> 
        <Route path='/reviews' element={<Reviews />} /> 
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<SignUp />} /> 
        <Route path='/blogs' element={<Blogs />} /> 
      </Routes>
    </div>
  );
}

export default App;
