import { useState } from "react";
import { Link, Outlet } from "react-router";
import CartImage from "./Components/CartImage";

function App() {
  const [cart, setCart] = useState(new Map());

  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="cart">
          <CartImage amt={cart.size} />
        </Link>
      </nav>
      <Outlet context={[cart, setCart]} />
    </>
  );
}

export default App;
