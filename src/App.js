import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import CartContext from "./Context/CartContext";
import OffcanvasContext from "./Context/OffcanvasContext";
import Home from "./Pages/Home/Home/Home";
import ProductDetail from "./Pages/Home/ProductDetail/ProductDetail";
import OrderInfo from "./Pages/OrderInfo/OrderInfo";
import Payment from "./Pages/Payment/Payment";

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
        <Route path="/pay" element={<Payment/>} />
      </Routes>
    </Router>
   </OffcanvasContext>
  </CartContext>
  </AuthProvider>
  );
}

export default App;
