import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProduct';
import AllProducts from './Components/AllProducts';
import SideBar from './Components/SideBar';
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex bg-green-200">
      <SideBar />
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
