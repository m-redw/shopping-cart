import { useOutletContext } from "react-router";
import CartProduct from "./CartProduct";
import styles from "../Styles/Cart.module.css";

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
    <div className={styles.cart}>
      <h1 className={styles.header}>Shopping Cart</h1>

      {cart.size === 0 ? (
        <p>Nothing in cart yet...</p>
      ) : (
        <div className={styles.productsList}>
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

          <h3 className={styles.subtotal}>Subtotal: ${subtotal}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
