import { useState, useEffect } from "react";
import Product from "./Product";
import { useOutletContext } from "react-router";

const Shop = () => {
  const [cart, setCart] = useOutletContext();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  // finalSearch variable created becuz I don't wanna update page
  // every input. Only when the user submits the search will
  // the page update.
  const [finalSearch, setFinalSearch] = useState("");

  useEffect(() => {
    let url = "https://dummyjson.com/products?limit=10";
    if (finalSearch.length > 0) {
      url = `https://dummyjson.com/products/search?q=${finalSearch}&limit=10`;
    }
    fetch(url)
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
  }, [finalSearch]);

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

  const handleSearch = (e) => setSearchInput(e.target.value);
  const search = (e) => {
    e.preventDefault();
    // useEffect won't trigger if finalSearch is same,
    // meaning loading will stay true until user searches
    // for something actually different
    if (finalSearch !== searchInput) {
      setLoading(true);
      setFinalSearch(searchInput);
    }
  };

  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <form>
        <input
          type="text"
          onChange={handleSearch}
          onSubmit={search}
          value={searchInput}
        />
        <button onClick={search}>Search</button>
      </form>

      {/* If loading, show "loading", else, show products */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {finalSearch.length === 0 && <h1>Popular Items</h1>}
          {products.length > 0 ? (
            products.map((p) => (
              <Product productObj={p} onSubmit={addToCart} key={p.id} />
            ))
          ) : (
            <p>Nothing in stock...</p>
          )}
        </>
      )}
    </>
  );
};

export default Shop;
