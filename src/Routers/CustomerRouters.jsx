import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/homepage/HomePage";
import Cart from "../customer/components/cart/Cart";
import Navigation from "../customer/components/navigation/Navigation";
import Footer from "../customer/components/footer/Footer";
import Product from "../customer/components/product/Product";
import ProductCard from "../customer/components/product/ProductCard";
import ProductDetails from "../customer/components/productdetails/ProductDetails";
import Checkout from "../customer/components/checkout/Checkout";
import Order from "../customer/components/Order/Order";
import OrderDetails from "../customer/components/Order/OrderDetails";
import PaymentSuccess from "../customer/components/payment/PaymentSuccess";

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
      <Routes>
        <Route path="/login" element={<HomePage/>}></Route>
        <Route path="/register" element={<HomePage/>}></Route>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product/>}></Route>
        <Route path="/product/:productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default CustomerRouters;
