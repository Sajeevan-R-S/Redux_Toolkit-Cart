import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart"
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
