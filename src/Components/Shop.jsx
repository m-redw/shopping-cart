import { useState, useEffect } from "react";
import Product from "./Product";
import { useOutletContext } from "react-router";

const Shop = () => {
  const [cart, setCart] = useOutletContext();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(cart);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((res) => {
        // response is {} with array of products inside {}.products
        // so yoink that out and setProducts to the necessary stuff only.
        const prods = res.products;
        setProducts(
          prods.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            rating: p.rating,
            thumbnail: p.thumbnail,
          })),
        );
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []); // dependency array based on search bar

  const addToCart = (productAndAmt) => {
    // map value looks like:
    // id: {product: ..., amount:...}
    const newMap = new Map(cart);
    const pId = productAndAmt.product.id;

    // checks to see if item already in cart
    if (cart.has(pId)) {
      const oldVal = newMap.get(pId);
      newMap.set(pId, {
        product: productAndAmt.product,
        amount: oldVal.amount + productAndAmt.amount,
      });
      setCart(newMap);
    } else {
      newMap.set(pId, productAndAmt);
      setCart(newMap);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <input type="text" />

      <h1>Popular Items</h1>
      {products.map((p) => (
        <Product productObj={p} onSubmit={addToCart} key={p.id} />
      ))}
    </>
  );
};

export default Shop;
