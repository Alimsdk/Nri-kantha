import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CartContext from "./Context/CartContext";
import OffcanvasContext from "./Context/OffcanvasContext";
import ManageAllOrders from "./Pages/Account/LoginModal/ManageAllOrders/ManageAllOrders";
import ManagePaidOrders from "./Pages/Account/LoginModal/ManagePaidOrders/ManagePaidOrders";
import OrderHistory from "./Pages/Account/LoginModal/OrderHistory.js/OrderHistory";
import ShowPostedImg from "./Pages/Account/LoginModal/ShowPostedImg/ShowPostedImg";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import OrderInfo from "./Pages/OrderInfo/OrderInfo";
import Payment from "./Pages/Payment/Payment";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";

function App() {
  return (
  <AuthProvider>
    <CartContext>
       <OffcanvasContext>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/products/:id" element={<ProductDetail/>} />
        <Route path="/order-info" element={<OrderInfo/>} />
        <Route path="/myorders" element={<OrderHistory/>} />
        <Route path="/pay" element={<Payment/>} />
        <Route path="/all_orders" element={<AdminRoute>
             <ManageAllOrders/>
        </AdminRoute>} />

        <Route path="/paid_orders" element={<AdminRoute>
            <ManagePaidOrders/>
        </AdminRoute>} />

        <Route path="/custom_img" element={<ShowPostedImg/>} />

      </Routes>
    </Router>
   </OffcanvasContext>
  </CartContext>
  </AuthProvider>
  );
}

export default App;
