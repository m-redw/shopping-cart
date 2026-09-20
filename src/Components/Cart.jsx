import { useOutletContext } from "react-router";
import CartProduct from "./CartProduct";

const Cart = () => {
  const [cart] = useOutletContext();
  // map value looks like:
  // id: {product: ..., amount:...}

  const roundNum = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  };

  let subtotal = 0;
  if (cart.size > 0) {
    cart.forEach((productAndAmt) => {
      const price = productAndAmt.product.price;
      const amt = productAndAmt.amount;
      subtotal += price * amt;
    });

    subtotal = roundNum(subtotal);
  }

  return (
    <>
      <h1>Shopping Cart</h1>

      {cart.size === 0 ? (
        <p>Nothing in cart yet...</p>
      ) : (
        <>
          {
            // map.forEach returns undefined...
            // so do this whole ordeal instead
            Array.from(cart.entries()).map(([id, value]) => (
              <CartProduct
                productObj={value.product}
                amount={value.amount}
                key={id}
              />
            ))
          }

          <h3>Subtotal: ${subtotal}</h3>
        </>
      )}
    </>
  );
};

export default Cart;
