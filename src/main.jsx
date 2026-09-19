import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Home from "./Components/Home.jsx";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
