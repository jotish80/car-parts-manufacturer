 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import MyProfile from './Pages/DashBoard/MyProfile';
import DashBoard from './Pages/DashBoard/DashBoard';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import ManageOrders from './Pages/DashBoard/ManageOrders';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import MakeAdmin from './Pages/DashBoard/MakeAdmin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
         </RequireAuth>
        } /> 
        
        <Route path='/login' element={<Login />} /> 
        <Route path='/signup' element={<SignUp />} /> 
        <Route path='/blogs' element={<Blogs />} /> 
        <Route path='/dashboard' element={<DashBoard />}>
          <Route index element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='manageorders' element={<ManageOrders/>}></Route>
          <Route path='addproduct' element={<AddProduct/>}></Route>
          <Route path='admin' element={<MakeAdmin/>}></Route>
          <Route path='manageproducts' element={<ManageProducts/>}></Route>
          <Route path='profile' element={<MyProfile/>}></Route>
        </Route> 
        <Route path='*' element={<NotFound />} /> 
      </Routes>
    </div>
  );
}

export default App;
