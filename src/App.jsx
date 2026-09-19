import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="shop">SHOP</Link>
        <Link to="cart">CART</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
