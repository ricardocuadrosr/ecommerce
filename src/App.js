import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Footer from './customer/components/footer/Footer';
import Product from './customer/components/product/Product';
import ProductDetails from './customer/components/productdetails/ProductDetails';
import Cart from './customer/components/cart/Cart';
import Checkout from './customer/components/checkout/Checkout';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';
import AdminRouters from './Routers/AdminRouters';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        <Route path='/admin/*' element={<AdminRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
