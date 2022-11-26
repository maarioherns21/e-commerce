
import NavBar from "../Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import useFetch from "../useFetch/useFetch";


export default function App() {
const {cart} =useFetch()


  return (
    <BrowserRouter>
    <div>
      <NavBar totalItems={cart.total_items}  />
      <Routes>
     <Route path="/" exact element={<Home />}/>
     <Route path="/product/:id" exact element={<ProductDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
