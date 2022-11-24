
import NavBar from "../Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ProductDetails from "../Components/ProductDetails/ProductDetails";


export default function App() {




  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
     <Route path="/" exact element={<Home />}/>
     <Route path="/product/:id" exact element={<ProductDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
